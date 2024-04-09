from pinecone import Pinecone, ServerlessSpec
from openai import OpenAI
from dotenv import dotenv_values
import os
import json

# env_name = "credentials.env"
# config = dotenv_values(env_name)
client = OpenAI(api_key=os.environ.get("openai_api"))


index_name = os.environ.get("index_name")
pc = Pinecone(
    api_key=os.environ.get("Pinecone_api_key"),
    environment=os.environ.get("Pinecone_environment")
)
index = pc.Index(index_name)

def GetGPTCompletion(prompt, recommendedMajors=None, history=[]):
    DEFAULT_SYSTEM_PROMPT = '''You are a helpful, respectful and honest INTP-T AI Assistant named EDU ADVISOR. You are talking to a human User, who are seeking advice about universities.
    Always answer as helpfully and logically as possible, while being safe. Your answers should not include any harmful, political, religious, unethical, racist, sexist, toxic, dangerous, or illegal content. Please ensure that your responses are socially unbiased and positive in nature. 
    You are using turkish localization, so for numbers use decimal comma instead of decimal point.
    You also have access to RAG vector database access which has various information about Turkish Universities.
    If you get various informations from rag search, make sure to use all of them regarding to user's question. 
    You can speak fluently in Turkish and English.
    Note: Sometimes the Context is not relevant to Question, so give Answer according to that situation.
    '''

    if (recommendedMajors != None and recommendedMajors != []):
        sentences = []
        for i in range(min(len(recommendedMajors),5)):
            sentence = 'This person is interested in %s. And this major is under %s category.' % (
                recommendedMajors[i]["Major"], {recommendedMajors[i]["Major Category"]})
            sentences.append(sentence)
        major_prompt = ".".join(str(element) for element in sentences)
        recommend_prompt = """The user is interested in the following majors. Assist the user about their question based on the major which they are interested. In the next sentences it will be given that majors whose are the user is interested in, they will be given in the order of most interested to less interested.  """ + major_prompt

        print(f'Prompt: {recommend_prompt}')
        DEFAULT_SYSTEM_PROMPT = DEFAULT_SYSTEM_PROMPT + recommend_prompt

    if (history != []):
        summarized_prompt = summarizeQuery(history, prompt)
    else:
        summarized_prompt = prompt

    rag = VectorSearch(summarized_prompt, k=10)
    if(rag == ""):
        sum_rag = ''
    else:
        sum_rag = summarizeRag(rag, summarized_prompt, prompt)
    response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {f"role": "system", "content": DEFAULT_SYSTEM_PROMPT},
            {f"role": "user", "content": "RAG:" +
                sum_rag + ",Summarized Prompt: " + prompt + ", User's question:"+prompt}
        ]
    )

    print(f'Summarized Prompt: {summarized_prompt}\n')
    print(f'RAG: {rag}\n')
    print(f'Summarized RAG: {sum_rag}\n\n')
    return response.choices[0].message.content


def summarizeQuery(history: list, prompt: str):
    SYSTEM_PROMPT = '''Given the following conversation between a user and an AI assistant and a follow up question from user, rephrase the follow up question to be a standalone question. Ensure that the standalone question summarizes the conversation and completes the follow up question with all the necessary context.'''
    msgs = history
    msgs.insert(0, {f"role": "system", "content": SYSTEM_PROMPT})
    response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=msgs
    )
    return response.choices[0].message.content


def summarizeRag(RagData, summarizedPrompt, prompt):
    SYSTEM_PROMPT = '''You access to RAG vector database access which has various information about Turkish Universities. 
    It's given to you in format of sentences. Each sentence is a different information about a university or a department.
    And this is the data retrieved from the RAG database by querying the prompt.
    Get rid of unnecessary data while keeping relevant data in regards to user's prompt. 
    You should pay attention to universities scholarship property, this may be referred in the data as "ücretli","%50 indirimli","%50 ücretli","burslu" and other scholarship information. in this don't mix up with the scholarship data of the department with other scholarships, you should keep integrity of the data.
    the result must contain all the information about the given university and the department, if various data exists all of them are necessary so final result must contain each one individually.
    '''
    prompt = "RAG Data: " + RagData + ", Prompt: " + \
        summarizedPrompt + ", User's question: " + prompt

    response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {f"role": "system", "content": SYSTEM_PROMPT},
            {f"role": "user", "content": prompt}
        ]
    )
    return response.choices[0].message.content


def VectorSearch(query, k=5):
    Rag_data = ""
    xq = client.embeddings.create(input=query, model="text-embedding-ada-002")
    res = index.query(vector=[xq.data[0].embedding],
                      top_k=k, include_metadata=True)
    for match in res['matches']:
        if match['score'] < 0.80:
            continue
        Rag_data += match['metadata']['text'].strip().replace("\n", "")
    print(Rag_data)
    return Rag_data
