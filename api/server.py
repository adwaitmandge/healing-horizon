# FASTAPI requirements
from fastapi import FastAPI, Request, File, UploadFile, Form
from fastapi.responses import FileResponse
from fastapi.middleware.cors import CORSMiddleware
from llama_index import (
    GPTSimpleVectorIndex,
    SimpleDirectoryReader,
    QuestionAnswerPrompt,
    GPTListIndex,
)
from llama_index.indices.composability import ComposableGraph

from pydantic import BaseModel
from typing import Annotated, List
from llama_index import download_loader, ServiceContext
from PyPDF2 import PdfMerger
import pdfkit
import os
import requests
import json

os.environ["HUGGINGFACEHUB_API_TOKEN"] = "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"


# Other requirements
import shutil
import pathlib
import os
import glob

# Custom modules
import embeddings

#####

# init APP
app = FastAPI()
origins = ["*"]
# handle cors
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# idk what this does
class PDFModel(BaseModel):
    file: UploadFile = File(...)


# what are you doing on this route?
@app.get("/")
async def root():
    return {"???????????"}


@app.get("/")
async def root():
    return {"helo world"}


current_filename = None
current_filetype = None
current_vector_index = None
current_index = None
current_service_context = None


# initial processing of document
@app.post("/process")
async def process(
    filetype: Annotated[str, Form()],
    # files: List[UploadFile],
    embed_model: Annotated[str, Form()],
    llm_model: Annotated[str, Form()],
    ocr: Annotated[str, Form()],
):
    files = open("output.pdf", "rb")
    print(files.name)
    redundant = glob.glob("./current_active/*")
    for r in redundant:
        os.remove(r)

    redundant = glob.glob("./data/*")
    for r in redundant:
        os.remove(r)

    merger = PdfMerger()

    with open(f"current_active/_merge{files.name}", "wb") as buffer:
        shutil.copyfileobj(files, buffer)
    for item in os.listdir("./current_active/"):
        if item.startswith("_merge"):
            if ocr == "true":
                print("inside ocr")
                embeddings.get_ocr_done(item)
            merger.append("./current_active/" + item)
            os.remove("./current_active/" + item)

    merger.write("./current_active/" + "merged.pdf")
    merger.close()
    global current_filename, current_filetype, current_service_context, current_index, current_vector_index
    current_service_context = embeddings.get_service_context(embed_model, llm_model)
    current_filename = "merged.pdf"
    current_filetype = filetype

    # create embeddings
    current_vector_index, current_index = embeddings.create_embeddings(
        current_filename, current_filetype, current_service_context
    )

    # return {"Embeddings created for file ":"done"}
    return {"response": "Embeddings created for given file"}


# ask questions on processed document
@app.post("/queryqna")
async def query():
    query = ["addicted to alcohol?", "Mobile addiction?"]
    dict = {}
    counter = 1
    for q in query:
        res = embeddings.query_qna(q, current_filename, current_service_context)
        dict.update({counter: str(res)})
        counter += 1
    print(dict)
    url = "http://localhost:5000/api/student/interpret"
    headers = {"Content-Type": "application/json", "Accept": "application/json"}
    requests.post(url, json=dict, headers=headers)

    return dict

