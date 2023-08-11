import { Blockchain } from "./blockchain";

const difficulty = Number(process.argv[2]) || 4;
const blockchain = new Blockchain(difficulty);

const numblocks = Number(process.argv[3]) || 10;
let chain = blockchain.chain;

for (let i = 0; i < numblocks; i++) {
    const bloco = blockchain.createBlock(`Block: ${i}`);
    const mineInfo = blockchain.minedBlock(bloco);
    chain = blockchain.sendBlock(mineInfo.minedBlock);
}

console.log('--- BLOCKCHAIN ---');
console.log(chain);