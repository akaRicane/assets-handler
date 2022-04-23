const express = require("express");
const cors = require('cors');
const https = require('https');
const path = require('path');
const fs = require('fs');
const util = require('util')

const APP = express();
APP.use(cors());
const PORT = 3001;
const ASSETS_DIR = '/Users/ricane/Documents/Projets/coding/mapping/public/assets/fonts';

// APP.use(express.static('public'));

APP.get("/", (req, res) => { console.log(req); res.send("This is from express"); });

APP.get("/analyze", async (req, res) => {
    console.log("\n\nNew request for analysis\n");
    await readDirectory(ASSETS_DIR)
        .then(filenames => {
            var assetContent = [];
            filenames.forEach(file => {
                assetContent.push(path.join(ASSETS_DIR, file));
            });

            console.log(assetContent);
            res.send(assetContent);
        })
        // If promise is rejected
        .catch(err => {
            console.log("Error code -> ${err.code}");
            res.send('Fail');
        });
});

APP.post('/', (req, res) => {
    res.send("Got a POST request");
});

const server = https.createServer({
    key: fs.readFileSync(`${__dirname}/localhost-key.pem`, 'utf8'),
    cert: fs.readFileSync(`${__dirname}/localhost.pem`, 'utf8')
  }, APP);

server.listen(PORT, () => { console.log("Express.js server listening on PORT: " + PORT) });

const readDir = util.promisify(fs.readdir)

const readDirectory = async (path) => {
    const filenames = await readDir(path)
    console.log(typeof filenames)
    return filenames;
}


const listDirContent = async (folder) => {
    var tempReader = [];
    console.log("Listing content of: " + folder);
    await fs.readdir(folder, (err, files) => {
        if (err) {
            console.log(err);
        }
        else {
            // console.log(files);
            files.forEach(file => {
                var dest = path.join(folder, file);
                if (fs.lstatSync(dest).isDirectory()) {
                    // console.log('Folder found: ' + dest);
                    console.log('Folder found');
                    // listDirContent(dest);
                    // assetContent = listDirContent(ASSETS_DIR, assetContent);
                }
                else if (!fs.lstatSync(dest).isFile()) {
                    console.log('Unknown : ' + dest);
                }
                else {
                    tempReader.push(String(dest));
                }
            })
        }
        console.log('Current number of assets: ' + tempReader.length);
        console.log("Temp from inside");
        console.log(tempReader);
        return tempReader;
    });
}

const listDirContentAsync = util.promisify(listDirContent)