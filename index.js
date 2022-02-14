const fs = require('fs');

const genFiles = require("./lib/genFiles")

for (let i = 2; i < process.argv.length; i++) {
    const entityName = process.argv[i];
    genFiles(entityName)
}