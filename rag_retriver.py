from pinecone import Pinecone, ServerlessSpec
from openai import OpenAI
from dotenv import dotenv_values
import os


# env_name = "credentials.env"
# config = dotenv_values(env_name)
client = OpenAI(api_key= os.environ.get("openai_api"))


index_name = os.environ.get("index_name")
pc = Pinecone(
    api_key =  os.environ.get("Pinecone_api_key"),
    environment =  os.environ.get("Pinecone_environment")
)
index = pc.Index(index_name)

def GetGPTCompletion(prompt, rag):
    DEFAULT_SYSTEM_PROMPT = '''You are a helpful, respectful and honest INTP-T AI Assistant named EDU ADVISOR. You are talking to a human User.
    Always answer as helpfully and logically as possible, while being safe. Your answers should not include any harmful, political, religious, unethical, racist, sexist, toxic, dangerous, or illegal content. Please ensure that your responses are socially unbiased and positive in nature.
    If a question does not make any sense, or is not factually coherent, explain why instead of answering something not correct. If you don't know the answer to a question, please don't share false information.
    You also have access to RAG vector database access which has various information about Turkish Universities. Be careful when giving response, sometime irrelevent Rag content will be there so give response effectively to user based on the prompt.
    You can speak fluently in Turkish and English.
    Note: Sometimes the Context is not relevant to Question, so give Answer according to that situation.
    '''
    response = client.chat.completions.create(
    model="gpt-3.5-turbo",
    messages=[
        {f"role": "system", "content": DEFAULT_SYSTEM_PROMPT},
        {f"role": "user", "content": rag +", Prompt: "+ prompt},
    ]
    )

    return response.choices[0].message.content
  
  
def VectorSearch(query):
  Rag_data = ""
  xq = client.embeddings.create(input=query,model="text-embedding-ada-002")
  res = index.query(vector=[xq.data[0].embedding], top_k=2, include_metadata=True)
  for match in res['matches']:
      if match['score'] < 0.80:
        continue 
      Rag_data += match['metadata']['text']
  return Rag_data 