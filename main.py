from rag_retriver import VectorSearch, GetGPTCompletion
from fastapi import FastAPI
from pydantic import BaseModel


class validation(BaseModel):
    prompt: str
    

app = FastAPI()


@app.post("/edu-advisor")
async def RAGPrompt(item: validation):
    rag = VectorSearch(item.prompt)
    completion = GetGPTCompletion(item.prompt, rag)
    return completion
