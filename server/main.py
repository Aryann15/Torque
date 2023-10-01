from langchain.agents import create_csv_agent
from langchain.llms import OpenAI
from dotenv import load_dotenv

def main(userCsv , userQuestion ):
    load_dotenv()
    llm = OpenAI(temperature=0)
    agent = create_csv_agent(llm,userCsv, verbose=True)
    response = agent.run(userQuestion)
    return response;
    

if __name__ == "__main__":
    main()