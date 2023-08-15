const fs = require('fs');
const readline = require('readline');

async function* readLinesFile(after = 0) {
    const file = './MOCK_DATA.sql';
    const read = fs.createReadStream(file, { encoding: 'utf-8' });

    let afterLine = after;
    let lineNum = 1;

    const readL = readline.createInterface({
        input: read,
        output: process.stdout,
        terminal: false
    });

    for await (const line of readL) {
        if (lineNum > afterLine) {
            yield line;
        }
        lineNum++;
    }

    console.log('Finish read.');
}

async function run() {
    const iterator = readLinesFile(999)

    console.log('Start READ')

    for await (const line of iterator) {
        console.log(line)
    }
}

run()