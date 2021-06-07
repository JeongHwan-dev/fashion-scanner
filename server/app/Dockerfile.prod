FROM pytorch/pytorch

WORKDIR /usr/src/app

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN apt-get update \
    && apt-get install netcat libpq-dev postgresql postgresql-contrib -y \
    && apt-get install libjpeg-dev zlib1g-dev libgl1-mesa-glx libglib2.0-0 -y

RUN pip install -U pip
COPY ./requirements.txt .
RUN pip install --ignore-installed ruamel-yaml
RUN pip install -r requirements.txt


COPY ./entrypoint.sh .

COPY ai/mmfashion .
RUN python setup.py install

COPY . .

ENTRYPOINT ["/usr/src/app/entrypoint.sh"]
