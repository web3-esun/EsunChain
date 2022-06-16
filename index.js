import Transaction from "./src/transaction.js";
import Blockchain from "./src/blockchain.js";

const EsunChain = new Blockchain();

EsunChain.createTransaction(new Transaction("address1", "address2", 100));
EsunChain.createTransaction(new Transaction("address1", "address2", 200));
EsunChain.createTransaction(new Transaction("address2", "address3", 400));

EsunChain.minePendingTransactions("addressX");
EsunChain.minePendingTransactions("address1");

//console.log(JSON.stringify(EsunChain, null, 4));

console.log(EsunChain.getBalanceOfAddress("address1"));
console.log(EsunChain.getBalanceOfAddress("addressX"));
