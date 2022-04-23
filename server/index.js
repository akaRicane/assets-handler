const express = require("express");
const cors = require('cors');
const fs = require('fs');
const https = require('https');

var recursive = require('recursive-readdir');

const APP = express();
APP.use(cors());
const PORT = 3001;

APP.get("/", (req, res) => { console.log(req); res.send("This is from express"); });

APP.get("/analyze", async (req, res) => {
    const folder = req.query["folder"]
    console.log("\n\nNew request to Analyze assets (" + folder + ")");
    var dirReader = [];
    await recursive(folder)
    .then((files) => {
        for (const [key, file] of Object.entries(files)) {dirReader.push(file);}
        console.log("Assets analysis is done ! (found: " + dirReader.length + ")\n");
        res.send(dirReader);
    })
});

const server = https.createServer({
    key: fs.readFileSync(`${__dirname}/localhost-key.pem`, 'utf8'),
    cert: fs.readFileSync(`${__dirname}/localhost.pem`, 'utf8')
  }, APP);

server.listen(PORT, () => { console.log("Express.js server listening on PORT: " + PORT) });