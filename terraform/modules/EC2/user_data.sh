#!/bin/bash

set -e

# Update system
dnf update -y

# Install Python and pip
dnf install -y python3 python3-pip

# Create application directory
mkdir -p /home/ec2-user/flask-app

# Create requirements.txt
cat <<EOF >/home/ec2-user/flask-app/requirements.txt
Flask
EOF

# Install Python packages
pip3 install -r /home/ec2-user/flask-app/requirements.txt

# Create Flask application
cat <<EOF >/home/ec2-user/flask-app/app.py
from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
    return "Terraform Flask App Running through CI/CD", 200

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
EOF

# Set ownership
chown -R ec2-user:ec2-user /home/ec2-user/flask-app

# Start Flask
nohup python3 /home/ec2-user/flask-app/app.py > /tmp/flask.log 2>&1 &