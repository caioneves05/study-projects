const fs = require('fs')

const file = './MOCK_DATA.sql'

function readLinesFile(after = 0) {
    const read = fs.createReadStream(file, {encoding: 'utf-8'})
    
    function processLine(line) {
        if (lineNum > afterLine) {
            console.log(line);
        }
        lineNum++
    }
    
    let afterLine = after
    let lineNum = 1
    
    read.on('data', chunk => {
        const lines = chunk.split('\n');
        for (const line of lines) {
            processLine(line);
        }
    });
    
    read.on('end', () => {
        console.log('Finish read.');
    });
    
    read.on('error', err => {
        throw new Error(err);
    });
}

readLinesFile()
