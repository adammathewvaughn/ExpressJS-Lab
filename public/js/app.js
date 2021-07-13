const request = require('request');
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express(); 
app.get('/', (req, res, next) => {
    res.send("Hello Darkness, my old friend");
});
app.get('/about', (req, res, next) => {
    res.send("asdfasdfASfdasd");
});

app.listen(3000);

