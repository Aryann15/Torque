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
              {console.log(userQuestion)}
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
