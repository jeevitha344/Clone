#!/bin/bash
set -e

python3 -m pip install \
    --no-index \
    --find-links=/home/ec2-user/flask-packages \
    -r /home/ec2-user/flask-app/requirements.txt