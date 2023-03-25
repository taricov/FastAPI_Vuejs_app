from fastapi import FastAPI
# from typing import Union
from tortoise import fields
from tortoise.contrib.fastapi import register_tortoise
from tortoise.contrib.pydantic import pydantic_model_creator
from tortoise.models import Model
from dotenv import load_dotenv
import os

app = FastAPI()
load_dotenv()





@app.get("/")
async def fetch_all():
	return {"name": os.getenv("JWT_TOKEN")}

# @app.get("/items/{item_id}")
# async def read_item(item_id: int, q: Union[str, None] = None):
#     return {"item_id": item_id, "q": q}
