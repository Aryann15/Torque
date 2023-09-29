import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import Container from "@mui/material/Container";
import { useState } from "react";

const Csvbot = () => {

const [isFileUploaded, setIsFileUploaded] = useState(false)


function handleFileUpload (event) {
  setIsFileUploaded(true)
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

          </label>
          {isFileUploaded ? (
        <div>
          <p>File uploaded successfully!</p>
          {/* You can add more content or actions here */}
        </div>
      ) : (
        <div>
          <p>Upload your CSV file</p>
          {/* Render your file upload input as before */}
        </div>)}
        </Card>
      </Container>
    
  );
};

export default Csvbot;
