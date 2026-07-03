#!/bin/bash

cd /home/ec2-user/flask-app

nohup python3 app.py >/home/ec2-user/flask-app/flask.log 2>&1 &