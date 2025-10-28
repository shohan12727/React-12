const express = require ('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send("hello this is my first ever server")
})

app.listen(port , () => {
    console.log(`example app listening on ${port}`)
})

