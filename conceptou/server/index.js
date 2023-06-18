const connectmongodb = require("./db");
const express = require('express');
const cors = require('cors')


connectmongodb();

const app = express()
const port = 5000

app.use(cors())
app.use(express.json())
//available routes

app.use('/api/auth', require('./routes/auth'));


app.listen(port, async() => {
  await console.log(`Example app listening on port ${port}`)
})