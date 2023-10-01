const express = require('express')
const {spawn} = require('child_process');

const app = express()
const port = 8080

app.get('/', (req, res) => {

  const python = spawn('python', ['check.py']);

 
  res.send('Running Python script...')

 
  python.stdout.on('data', (data) => {
    console.log(data.toString())  
  })

   
  python.on('error', (err) => {
    console.log(err)
    res.send('Error running Python script')  
  })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))