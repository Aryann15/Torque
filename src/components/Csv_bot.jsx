import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

const Csvbot = () => {
  return (
    <>
      <h1>CSV BOT</h1>
      <center>
        <Card variant="outlined" style={{ width: 400, padding: 20 }}>
          <Typography variant="h5">Ask about your CSV</Typography>
          <br /><br />
          <Button variant="contained" component="label">
            Upload csv
            <input type="file" hidden />
          </Button><br /><br />
    
        </Card>
      </center>
    </>
  );
};

export default Csvbot;
