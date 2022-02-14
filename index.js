const genFiles = require("./lib/genFiles")

for (let i = 2; i < process.argv.length; i++) {
    const entityName = process.argv[i];
    genFiles(entityName)
}

process.on('uncaughtException', err => {
    console.error('There was an uncaught error', err)
    process.exit(1)
})