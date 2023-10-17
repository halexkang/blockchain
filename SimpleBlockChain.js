const hashFunc = (val) => {
  return val % 31;
}

class Block {
  constructor(data, hash, prevHash) {
    this.data = data;
    this.hash = hash;
    this.prevHash = prevHash;
  }
}

class Blockchain {
  constructor() {
    const firstBlock = new Block(1234, 1, 1);
    this.blockchain = [firstBlock];
  }

  addBlock(data) {
    const prevHash = this.blockchain[this.blockchain.length-1].hash;
    const hash = hashFunc(data + prevHash);
    const block = new Block(data, hash, prevHash);
    this.blockchain.push(block);
  }
}

const myBlockChain = new Blockchain();
myBlockChain.addBlock(83);
myBlockChain.addBlock(92);
myBlockChain.addBlock(10234);
myBlockChain.addBlock(1235);

console.log(myBlockChain);

