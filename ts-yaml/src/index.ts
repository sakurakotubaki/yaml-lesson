import * as fs from 'fs';
import * as yaml from 'js-yaml';

// node app.js
function findYamlFiles() {
    try {
        const doc = yaml.load(fs.readFileSync('index.yaml', 'utf8'));
        console.log(doc);
    } catch (e) {
        console.error(e);
    }
}

findYamlFiles();