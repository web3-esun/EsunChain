import Block from './src/block.js';
import Blockchain from './src/blockchain.js';

const EsunCoin = new Blockchain();
EsunCoin.addBlock(new Block(1, '02/01/2022', { amount: 100 }));

EsunCoin.addBlock(new Block(2, '03/01/2022', 'GG'));

EsunCoin.addBlock(new Block(3, '04/01/2022', { amount: 22323 }));

EsunCoin.addBlock(new Block(4, '05/01/2022', { amount: 1111 }));

console.log(JSON.stringify(EsunCoin, null, 4));
