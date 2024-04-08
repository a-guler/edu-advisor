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


def GetGPTCompletion(prompt, rag, recommendedMajors=None, history=[]):
    DEFAULT_SYSTEM_PROMPT = '''You are a helpful, respectful and honest INTP-T AI Assistant named EDU ADVISOR. You are talking to a human User, who are seeking advice about universities.
    Always answer as helpfully and logically as possible, while being safe. Your answers should not include any harmful, political, religious, unethical, racist, sexist, toxic, dangerous, or illegal content. Please ensure that your responses are socially unbiased and positive in nature. 
    You are using turkish localization, so for numbers use decimal comma instead of decimal point.
    You also have access to RAG vector database access which has various information about Turkish Universities. If the rag data is irrelevant to the question, you may ignore rag data. Be careful when giving response, sometime irrelevent Rag content will be there so give response effectively to user based on the prompt.
    You can speak fluently in Turkish and English.
    Note: Sometimes the Context is not relevant to Question, so give Answer according to that situation.
    '''

    if (recommendedMajors != None and recommendedMajors != []):
        sentences = []
        for i in range(len(recommendedMajors)):
            sentence = 'this person is interested in %s. And this major is under %s category.' % (recommendedMajors[i]["Major"],{recommendedMajors[i]["Major Category"]})
            sentences.append(sentence)
        major_prompt = ".".join(str(element) for element in sentences)
        recommend_prompt = """The user is interested in the following majors. The list is given most interested to least interested.""" + major_prompt
        
        
        print(f'Prompt: {recommend_prompt}')
        DEFAULT_SYSTEM_PROMPT = DEFAULT_SYSTEM_PROMPT + recommend_prompt
    msgs = history
    msgs.insert(0,{f"role": "system", "content": DEFAULT_SYSTEM_PROMPT})
    msgs.append({f"role": "user", "content": rag + ", Prompt: " + prompt})
    print(msgs)
    response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages = msgs
    )
    return response.choices[0].message.content


def VectorSearch(query):
    Rag_data = ""
    xq = client.embeddings.create(input=query, model="text-embedding-ada-002")
    res = index.query(vector=[xq.data[0].embedding],
                      top_k=6, include_metadata=True)
    for match in res['matches']:
        if match['score'] < 0.85:
            continue
        Rag_data += match['metadata']['text'].strip().replace("\n", "")
    print(Rag_data)
    return Rag_data
