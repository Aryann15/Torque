from flask import Flask, request
from langchain.agents import create_csv_agents
from langchain.llms import OpenAI
from dotenv import load_dotenv

app = Flask(__name__)


@app.route('/parse-csv', methods=['POST'])
def parse_csv():
      csv_file = request.files['csv']
      csv_file.save('uploaded.csv')
      return 'CSV uploaded'



load_dotenv()
