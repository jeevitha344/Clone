#!/bin/bash

echo "Restarting Flask application..."

pkill -f app.py || true

nohup python3 /home/ec2-user/flask-app/app.py > /tmp/flask.log 2>&1 &