# #!/bin/bash
# set -e

# exec > /tmp/user-data.log 2>&1

# echo "===== USER DATA STARTED ====="

# echo "Step 1: Wait for Terraform file provisioning"
# while [ ! -f /home/ec2-user/requirements.txt ]; do
#   echo "Waiting for requirements.txt..."
#   sleep 2
# done

# while [ ! -d /home/ec2-user/flask-packages ]; do
#   echo "Waiting for flask-packages..."
#   sleep 2
# done

# echo "Step 2: Enable pip"
# python3 -m ensurepip --default-pip

# echo "Step 3: Install Flask offline"
# python3 -m pip install \
#   --no-index \
#   --find-links=/home/ec2-user/flask-packages \
#   -r /home/ec2-user/requirements.txt

# # Verify install
# python3 -m pip show Flask || echo "Flask install failed"

# # -----------------------------
# # STEP 4: Create Flask App (CRITICAL FIX)
# # -----------------------------
# echo "Step 4: Create Flask application"

# mkdir -p /home/ec2-user/flask-app

# cat <<'EOF' > /home/ec2-user/flask-app/app.py
# from flask import Flask

# app = Flask(__name__)

# @app.route("/")
# def home():
#     return "Flask Running Offline", 200

# if __name__ == "__main__":
#     app.run(host="0.0.0.0", port=5000)
# EOF

# chown -R ec2-user:ec2-user /home/ec2-user/flask-app

# echo "Step 5: Start Flask app"
# nohup python3 /home/ec2-user/flask-app/app.py > /tmp/flask.log 2>&1 &

# sleep 5

# echo "Step 6: Verify port"
# ss -tulnp | grep 5000 || echo "FLASK NOT RUNNING"

# echo "===== USER DATA COMPLETED ====="

#!/bin/bash
set -e

exec > /tmp/user-data.log 2>&1

echo "===== USER DATA STARTED ====="

# Wait for Terraform file provisioning
while [ ! -f /home/ec2-user/requirements.txt ]; do
  sleep 2
done

while [ ! -d /home/ec2-user/flask-packages ]; do
  sleep 2
done

echo "Installing pip..."
python3 -m ensurepip --default-pip

echo "Installing Flask from offline packages..."
python3 -m pip install \
  --no-index \
  --find-links=/home/ec2-user/flask-packages \
  -r /home/ec2-user/requirements.txt

echo "Installing CodeDeploy Agent..."

dnf install -y ruby wget

cd /tmp

wget https://aws-codedeploy-ap-south-1.s3.ap-south-1.amazonaws.com/latest/install

chmod +x install

./install auto

systemctl enable codedeploy-agent
systemctl start codedeploy-agent

echo "===== USER DATA COMPLETED ====="