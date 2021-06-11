FROM python:3.8-slim-buster

WORKDIR /usr/src/app

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN apt-get update && apt-get install --no-install-recommends -y \
    libgl1-mesa-glx \
    libglib2.0-0 \
    libjpeg-dev \
    libpq-dev \
    netcat \
    postgresql \
    zlib1g-dev \
    && rm -rf /var/lib/apt/lists/*

COPY ./requirements.txt .
RUN pip install -U pip \
    --ignore-installed ruamel-yaml \
    -r requirements.txt \
    torch==1.8.1+cpu torchvision==0.9.1+cpu -f https://download.pytorch.org/whl/torch_stable.html

COPY ai/mmfashion .
RUN python setup.py install

COPY . .

ENTRYPOINT ["/usr/src/app/entrypoint.sh"]
