import { hash, hashValidate } from "./helpers";


export interface Block {
    header: {
        nonce: number;
        hashBlock: string;
    }
    payload: {
        sequence: number;
        timestamp: number;
        data: any;
        previousHash: string;
    }
}

export class Blockchain {
    #chain: Block[] = [];
    //first hash value
    private prefixPow = '0';

    constructor(private readonly difficulty: number = 4) {
        //genesis blok
        this.#chain.push(this.createBlockGenesis())
    }

    
    private createBlockGenesis() {
        const payload = {
            sequence: 0,
            timestamp: +new Date(),
            data: 'Inicial Block',
            previousHash: ''
        }

        return {
            header: {
                nonce: 0,
                hashBlock: hash(JSON.stringify(payload))
            },
            payload
        }
    }

    get chain() {
        return this.#chain
    }

    private get lastBlock() {
        return this.#chain.at(-1) as Block;
    }

    private hashLastBlock(): any {
        return this.lastBlock.header.hashBlock;
    }

    createBlock(data: any) {
        const newBlock: Block['payload'] = {
            sequence: this.lastBlock.payload.sequence + 1,
            timestamp: +new Date(),
            data,
            previousHash: this.hashLastBlock()
        }

        console.log(`Block #${newBlock.sequence} criado: ${JSON.stringify(newBlock)}`);
        return newBlock;
    }

    minedBlock(block: Block['payload']) {
        let nonce = 0;
        const start = +new Date()

        while(true) {
            const hashBlock: any = hash(JSON.stringify(block))
            const hashPow: any = hash(hashBlock + nonce)
    
            if(hashValidate({ hash: hashPow, difficulty: this.difficulty, prefix: this.prefixPow })) {
                const final: number = +new Date()
                const hashReduce: string = hashBlock.slice(0, 12)
                const minedTemp: number = (final - start) / 1000
    
                console.log(`Block ${block.sequence} mined in ${minedTemp}. Hash: ${hashReduce}  (${nonce} attempts)`)
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
                }
            }
            nonce++
        }
    }

    verifyBlock(block: Block): boolean {
        if(block.header.hashBlock !== this.hashLastBlock()) {
            console.log(`Block #${block.payload.sequence} is invalid. Last hash is invalid.`)
            return false
        }
        const hashTest: string = hash(hash(JSON.stringify(block.payload)) + block.header.nonce)

        if(!hashValidate({ hash: hashTest, difficulty: this.difficulty, prefix: this.prefixPow })) {
            console.error(`This Block is invalid.`)
            return false
        }

        return true
    }

    sendBlock(block: Block): Block[] {
        if(this.verifyBlock(block)) {
            this.#chain.push({ ...block })
            console.log(`Block #${block.payload.sequence} blockchain has been added ${JSON.stringify(block, null, 2)}`)
        }
        return this.#chain
    }
} 