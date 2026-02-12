const express = require('express')

const app = express();

app.get('/', (req,res) => {
    res.send("Server is running 🚀")
})


module.exports = app

