"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var yaml = require("js-yaml");
// node app.js
function findYamlFiles() {
    try {
        var doc = yaml.load(fs.readFileSync('index.yaml', 'utf8'));
        console.log(doc);
    }
    catch (e) {
        console.error(e);
    }
}
findYamlFiles();
