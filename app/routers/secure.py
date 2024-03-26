from fastapi import APIRouter, Depends
from app.auth import get_user
from pydantic import BaseModel
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse

from rag_retriver import VectorSearch, GetGPTCompletion
from Major_Recommend.src.main import score

router = APIRouter()

class validation(BaseModel):
    prompt: str

class answers(BaseModel):
    answers: list



@router.get("/")
async def get_testroute(user: dict = Depends(get_user)):
    return user


@router.post("/edu-advisor")
async def RAGPrompt(item: validation):
    rag = VectorSearch(item.prompt)
    completion = GetGPTCompletion(item.prompt, rag)
    return completion


@router.post("/major-recommend")
async def MajorRecommend(answers: answers):
    result =  score(answers[0], answers[1], answers[2])   
    
    json_compatible_item_data = jsonable_encoder(result)
    return JSONResponse(content=json_compatible_item_data)
