//jshint esversion: 6

const express = require('express');

const app = express();

app.get('/', function(req, res) {
    res.send('hello, world!');
})

app.listen(3000, ()=>{
    console.log("Server start at port 3000");
})