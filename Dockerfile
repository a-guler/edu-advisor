FROM python:3.9

WORKDIR /code

COPY ./requirements.txt /code/requirements.txt

RUN pip install --no-cache-dir --upgrade -r /code/requirements.txt

# COPY  ./__init__.py /code/__init__.py
# COPY ./credentials.env /code/credentials.env
COPY ./rag_retriver.py /code/rag_retriver.py
COPY ./Major_Recommend /code/Major_Recommend
COPY ./app /code/app

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "7860"]
