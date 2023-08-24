"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Blockchain = void 0;
const helpers_1 = require("./helpers");
class Blockchain {
    difficulty;
    #chain = [];
    //first hash value
    prefixPow = '0';
    constructor(difficulty = 4) {
        this.difficulty = difficulty;
        //genesis blok
        this.#chain.push(this.createBlockGenesis());
    }
    createBlockGenesis() {
        const payload = {
            sequence: 0,
            timestamp: +new Date(),
            data: 'Inicial Block',
            previousHash: ''
        };
        return {
            header: {
                nonce: 0,
                hashBlock: (0, helpers_1.hash)(JSON.stringify(payload))
            },
            payload
        };
    }
    get chain() {
        return this.#chain;
    }
    get lastBlock() {
        return this.#chain.at(-1);
    }
    hashLastBlock() {
        return this.lastBlock.header.hashBlock;
    }
    createBlock(data) {
        const newBlock = {
            sequence: this.lastBlock.payload.sequence + 1,
            timestamp: +new Date(),
            data,
            previousHash: this.hashLastBlock()
        };
        console.log(`Block #${newBlock.sequence} criado: ${JSON.stringify(newBlock)}`);
        return newBlock;
    }
    minedBlock(block) {
        let nonce = 0;
        const start = +new Date();
        while (true) {
            const hashBlock = (0, helpers_1.hash)(JSON.stringify(block));
            const hashPow = (0, helpers_1.hash)(hashBlock + nonce);
            if ((0, helpers_1.hashValidate)({ hash: hashPow, difficulty: this.difficulty, prefix: this.prefixPow })) {
                const final = +new Date();
                const hashReduce = hashBlock.slice(0, 12);
                const minedTemp = (final - start) / 1000;
                console.log(`Block ${block.sequence} mined in ${minedTemp}. Hash: ${hashReduce}  (${nonce} attempts)`);
                return {
                    minedBlock: {
                        payload: {
                            ...block
                        },
                        header: {
                            nonce,
                            hashBlock
                        }
                    }
                };
            }
            nonce++;
        }
    }
    verifyBlock(block) {
        if (block.header.hashBlock !== this.hashLastBlock()) {
            console.log(`Block #${block.payload.sequence} is invalid. Last hash is invalid.`);
            return false;
        }
        const hashTest = (0, helpers_1.hash)((0, helpers_1.hash)(JSON.stringify(block.payload)) + block.header.nonce);
        if (!(0, helpers_1.hashValidate)({ hash: hashTest, difficulty: this.difficulty, prefix: this.prefixPow })) {
            console.error(`This Block is invalid.`);
            return false;
        }
        return true;
    }
    sendBlock(block) {
        if (this.verifyBlock(block)) {
            this.#chain.push({ ...block });
            console.log(`Block #${block.payload.sequence} blockchain has been added ${JSON.stringify(block, null, 2)}`);
        }
        return this.#chain;
    }
}
exports.Blockchain = Blockchain;
