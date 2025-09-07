const fs = require('fs');
const yaml = require('js-yaml');

// node app.js
try {
    const doc = yaml.load(fs.readFileSync('app.yaml', 'utf8'));
    console.log(doc);
} catch (e) {
    console.error(e);
}