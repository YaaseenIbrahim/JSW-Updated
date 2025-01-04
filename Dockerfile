FROM python:3.10-alpine3.21

LABEL maintainer="razaanadam79@gmail.com, yaseenibrahimm12@gmail.com" \
      version="0.1.0" \
      description="website for jalaaluddin school"

ENV PYTHONUNBUFFERED 1

COPY ./requirements.txt /requirements.txt
COPY ./jsweb /jsweb

WORKDIR /jsweb
EXPOSE 8000

RUN python -m venv /py && \
    /py/bin/pip install --upgrade pip &&\
    apk add --update --no-cache postgresql-client &&\
    apk add --update --no-cache --virtual .tmp-deps\
        build-base postgresql-dev musl-dev &&\
    /py/bin/pip install -r /requirements.txt  &&\
    apk del .tmp-deps &&\
    adduser --disabled-password --no-create-home jsweb  

ENV PATH="/py/bin:$PATH"

USER jsweb