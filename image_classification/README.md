# Image classifier

[![](https://img.shields.io/badge/python-2.7%2C%203.5%2B-green.svg)]()
[![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)](http://perso.crans.org/besson/LICENSE.html)

> A customizable web app using Flask and TensorFlow.js to deploy for a quick start.

Forked from https://github.com/mtobeiyf/keras-flask-deploy-webapp

------------------

## Getting started in 5 minutes

- Clone this repo 
- Install requirements
- Run the script
- Check http://localhost:5000
- Done! :tada:

:point_down:Screenshot:

<p align="center">
  <img src="https://i.postimg.cc/qR73VzCk/demo2.png" width="600px" alt="">
</p>

------------------

## Local installation

### Clone the repo
```shell
$ git clone https://github.com/sixprime/tensorflowjs-flask-docker-webapp.git
```

### Install requirements

```shell
$ pip install -r requirements.txt
```

Make sure you have the following installed:
- Flask
- gevent

### Run with Python

Python 2.7 or 3.5+ are supported and tested.

```shell
$ python app.py
```

## Docker installation

### Pull an built-image from Docker hub
For your convenience, can just pull the image instead of building it. 
```shell
$ docker pull sixprime/tensorflowjs_flask_webapp:v1.0.0
$ docker run -d -p 5000:5000 sixprime/tensorflowjs_flask_webapp:v1.0.0
```

### Build and run an image
Once the repo has been cloned
```shell
$ cd tensorflowjs-flask-docker-webapp
$ docker build -t tensorflowjs_flask_webapp .
$ docker run -d -p 5000:5000 tensorflowjs_flask_webapp 
```

------------------

## Deployment

To deploy it for public use, you need to have a public **linux server**.

### Run the app

Run the script and hide it in background with `tmux` or `screen`.
```
$ python app.py
```

You can also use gunicorn instead of gevent
```
$ gunicorn -b 127.0.0.1:5000 app:app
```

More deployment options, check [here](http://flask.pocoo.org/docs/0.12/deploying/wsgi-standalone/)

### Set up Nginx

To redirect the traffic to your local app.
Configure your Nginx `.conf` file.
```
server {
    listen  80;

    client_max_body_size 20M;

    location / {
        proxy_pass http://127.0.0.1:5000;
    }
}
```

## More resources

[Transfer learning image classifier](https://www.tensorflow.org/js/tutorials/transfer/image_classification) with TensorFlow.js
