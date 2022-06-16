import Block from './block.js'

class Blockchain {
    constructor() {
        this.chain = [ this.createGenesisBlock() ];
        
    }

    createGenesisBlock(){
        return new Block(0, '01/01/2022', 'Esuncoin');
    }

    getLastBlock() {
        return this.chain[this.chain.length - 1];
    }

    addBlock(newBlock) {
        newBlock.previousHash = this.getLastBlock().hash;
        this.chain.push(newBlock);
    }
}

export default Blockchain;
