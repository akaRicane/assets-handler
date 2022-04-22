const express = require("express");
const path = require('path');
const fs = require('fs');

const APP = express();
const PORT = 3000;

const ASSETS_DIR = '/Users/ricane/Documents/Projets/coding/mapping/public/assets';
let assetContent = [];

// APP.use(express.static('public'));

APP.get("/", (req, res) => {
    res.send("This is from express.js");
});

APP.get("/listDirContent", (req, res) => {
    listDirContent(ASSETS_DIR);
    res.send(assetContent);
});

APP.post('/', (req, res) => {
    res.send("Got a POST request");
});


APP.listen(PORT, () => {
    console.log("Express.js server listening on PORT: " + PORT)
});

function listDirContent(folder) {
    console.log("Listing content of: " + folder);
    fs.readdir(folder, (err, files) => {
        if (err) {
            console.log(err);
        }
        else {
            // console.log(files);
            files.forEach(file => {
                var dest = path.join(folder, file);
                if (fs.lstatSync(dest).isDirectory()) {
                    // console.log('Folder found: ' + dest);
                    // console.log('Folder found');
                    listDirContent(dest);
                }
                else if (!fs.lstatSync(dest).isFile()){
                    console.log('Unknown : ' + dest);
                }
                else {
                    // console.log('File : ' + dest);
                    assetContent.push(dest);
                }
            })
        }
    });
    console.log('Current number of assets: ' + assetContent.length);
}