#!/bin/bash

echo "Starting Flask application..."

nohup python3 /home/ec2-user/flask-app/app.py > /tmp/flask.log 2>&1 &