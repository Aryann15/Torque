import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import Container from "@mui/material/Container";
import { useState } from "react";
import TextField from "@mui/material/TextField";



const Csvbot = () => {


  const [userCsv, setUserCsv] = useState(null);
  const [userQuestion, setUserQuestion] = useState(null)



  
  function handleFileUpload(event) {
    setUserCsv(event.target.files[0]);
  }
  function handleQuestionUpload(event) {
    setUserQuestion(event.target.value);
  }

  async function handleGetAnswer() {
    const formData = new FormData();
    formData.append("userCsv", userCsv);
    formData.append("userQuestion", userQuestion);

    try {
      const response = await fetch("http://localhost:5000/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const result = await response.text();
        console.log(result);; // Show a success message
      } else {
        alert("Error: Something went wrong");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <Container>
      <Typography variant="h3" align="center" gutterBottom>
        CSV BOT
      </Typography>
      <Card variant="outlined" sx={{ maxWidth: 400, p: 3, mx: "auto" }}>
        <Typography variant="h5">Ask about your CSV</Typography>
        <br />
        <br />
        <label htmlFor="csv-upload">
          <Button variant="contained" component="span">
            Upload CSV
          </Button>
          <input
            type="file"
            id="csv-upload"
            accept=".csv"
            style={{ display: "none" }}
            onChange={handleFileUpload}
          />
          {userCsv ? (
            <div>
              <p>File uploaded successfully!</p>
              {/* {console.log(userCsv)} */}
              <TextField
                id="outlined-basic"
                label="Ask about your csv"
                variant="outlined"
                onChange={handleQuestionUpload}
              />

              <Button onClick={handleGetAnswer}>
                get answer
              </Button>
              {/* <Typography>{answer}</Typography> */}
              {/* {console.log(userQuestion)} */}
            </div>
          ) : (
            <div>
              <p>Upload your CSV file</p>
            </div>
          )}
        </label>
      </Card>
    </Container>
  );
};

export default Csvbot;
