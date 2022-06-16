import SHA256 from "crypto-js/sha256.js";

class Block {
  constructor(timestamp, transactions, previousHash = "") {
    this.timestamp = timestamp;
    this.transactions = transactions;
    this.previousHash = previousHash;
    this.hash = this.calculateHash();
    this.nounce = 0;
  }

  calculateHash() {
    return SHA256(
      this.previousHash +
        this.timestamp +
        JSON.stringify(this.transactions) +
        this.nounce
    ).toString();
  }

  mineBlock(difficulty) {
    while (
      this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")
    ) {
      this.nounce += 1;
      this.hash = this.calculateHash();
    }
    console.log(`Block mined: ${this.hash}`);
  }
}

export default Block;
