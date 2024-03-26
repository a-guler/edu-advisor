
from fastapi import FastAPI

from fastapi import FastAPI, Depends

from app.routers import secure, public
from app.auth import get_user

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Hello World"}
    
app.include_router(
    public.router,
    prefix="/api/v1/public"
)
app.include_router(
    secure.router,
    prefix="/api/v1/secure",
    dependencies=[Depends(get_user)]
)
