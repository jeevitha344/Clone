from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
    return """
    <h1>Terraform + CI/CD Demo</h1>
    <p>Flask Application is Running Successfully!</p>
    """

@app.route("/health")
def health():
    return "OK", 200

@app.route("/about")
def about():
    return "This application is deployed using AWS CodePipeline and CodeDeploy."

if __name__ == "__main__":
    app.run(
        host="0.0.0.0",
        port=5000
    )