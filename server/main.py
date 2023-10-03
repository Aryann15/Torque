from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import os
from langchain.llms import OpenAI
from langchain.chat_models import ChatOpenAI
from langchain.agents.agent_types import AgentType
from werkzeug.utils import secure_filename
from langchain.agents import create_csv_agent

app = Flask(__name__)
CORS(app)


@app.route("/upload", methods=["POST"])
def upload_csv_and_question():
    load_dotenv()
    user_csv = request.files["userCsv"]
    user_question = request.form["userQuestion"]

    

    if user_csv and user_question:
        # Print the CSV file information
        print(f"CSV File Name: {user_csv.filename}")
        print(f"User Question: {user_question}")

        
        agent = create_csv_agent(
        OpenAI(temperature=0),
        user_csv,
        verbose=True,
        agent_type=AgentType.ZERO_SHOT_REACT_DESCRIPTION,
    )

        result = agent.run(user_question)
        return result

    else:
        return "Error: Missing CSV file or user question data!"


if __name__ == "__main__":
    app.run(debug=True)
