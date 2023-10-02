from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/upload', methods=['POST'])
def upload_csv_and_question():
    user_csv = request.files['userCsv']
    user_question = request.form['userQuestion']
    
    if user_csv and user_question:
        # Print the CSV file information
        print(f'CSV File Name: {user_csv.filename}')
        print(f'User Question: {user_question}')

        # You can process the CSV file or perform other actions here

        return user_csv.filename
    
    else:
        return 'Error: Missing CSV file or user question data!'

if __name__ == '__main__':
    app.run(debug=True)
