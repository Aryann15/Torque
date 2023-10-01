const express = require("express");
const { spawn } = require("child_process");
const cors = require("cors");
const app = express();
const port = 8081;
app.use(cors());app.use(cors());
app.get("/csvbot", (req, res) => {
  const { userCsv, userQuestion } = req.query;
  try{
  const python = spawn("python", ["main.py", userCsv, userQuestion]);


  let responseData = '';


  python.stdout.on("data", (data) => {
    console.log(data.toString());
    responseData += data.toString();
    
  });

  python.stderr.on("data", (data) => {
    console.log(data.toString());
    res.status(500).send("an error occursed");
  });
  python.on("close", (code) => {
    if (code === 0) {
      res.send(responseData);
    } else {
      // Handle non-zero exit code (error) here.
      res.status(500).send("An error occurred during execution.");
    }
});
} catch (error) {
  console.error(error);
  res.status(500).send("An error occurred.");
}});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
