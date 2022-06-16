import Transaction from './src/transaction.js';
import Blockchain from './src/blockchain.js';

const EsunCoin = new Blockchain();

EsunCoin.createTransaction(new Transaction('address1', 'address2', 100));
EsunCoin.createTransaction(new Transaction('address1', 'address2', 200));
EsunCoin.createTransaction(new Transaction('address2', 'address3', 400));

EsunCoin.minePendingTransactions('addressX');
EsunCoin.minePendingTransactions('address1');

//console.log(JSON.stringify(EsunCoin, null, 4));

console.log(EsunCoin.getBalanceOfAddress('address1'))
console.log(EsunCoin.getBalanceOfAddress('addressX'))
