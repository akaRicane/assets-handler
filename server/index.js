const express = require("express");
const cors = require('cors');
const fs = require('fs');
const https = require('https');

const Datastore = require('nedb');
const assetsdb = new Datastore('./server/assetsbase.db');
assetsdb.loadDatabase();

var recursive = require('recursive-readdir');

const APP = express();
APP.use(cors());
const PORT = 3001;

APP.get("/", (req, res) => { console.log(req); res.send("This is from express"); });

APP.get("/loadAssetsDb", (req, res) => {
    console.log("\n\nNew request to load AssetsDb");
    assetsdb.find({}, (err, docs) => {
        const doc = docs.at(-1)['files'];
        const folder = docs.at(-1)['folder'];
        console.log("AssetsDb loading is done ! (found: " + doc.length + ")\n");
        res.json({data: doc, folder: folder});
    })
});

APP.get("/analyze", async (req, res) => {
    const folder = req.query["folder"]
    const folderName = folder.split('/').at(-1);
    console.log("\n\nNew request to Analyze assets (" + folder + ")");
    var dirReader = [];
    await recursive(folder)
        .then((files) => {
            for (const [key, file] of Object.entries(files)) {
                // cut full path => folderName/cat/.../.../file.ext
                const relPath = file.split(folderName).at(-1);
                dirReader.push(analyzeFile(relPath, folderName));
            }
            const timestamp = Date.now();
            assetsdb.insert({ timestamp: timestamp, folder: folder, files: dirReader});
            console.log("Assets analysis is done ! (found: " + dirReader.length + ")\n");
            res.json(dirReader);
        })
});

const server = https.createServer({
    key: fs.readFileSync(`${__dirname}/localhost-key.pem`, 'utf8'),
    cert: fs.readFileSync(`${__dirname}/localhost.pem`, 'utf8')
}, APP);

server.listen(PORT, () => { console.log("Express.js server listening on PORT: " + PORT) });

function analyzeFile(file, folderName) {
    const splitArray = file.split('/');
    const cat = splitArray.at(1);
    const fileName = splitArray.at(-1);
    const idxFileName = splitArray.length - 1;
    const subcats = idxFileName - 1 >= 2 ? splitArray.slice(2, idxFileName) : [];
    const ext = file.split('.').at(-1);
    // console.log(fileName + ' of: ' + cat + ' / subcat : ' + subcats + ' (ext: ' + ext + ')');
    const analyzedFile = {
        file: file,
        fileName: fileName,
        folder: folderName,
        cat: cat,
        subcats: subcats,
        ext: ext,
    };
    // console.log(analyzedFile)
    return analyzedFile;
}