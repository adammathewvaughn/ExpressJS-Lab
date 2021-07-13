const express = require ("express");
const app = express ();
const http = require ("http");
const path = require ("path");


app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(3000);

// app.use(express.static(path.join(__dirname, "public")));