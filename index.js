import Transaction from "./src/transaction.js";
import Blockchain from "./src/blockchain.js";
import Keygen, {ec} from "./src/keygen.js";

// my wallet
const myWallet = new Keygen();
const myWalletAddress = myWallet.getPublicKey();

// your wallet
const yourWallet = new Keygen();
const yourWalletAddress = yourWallet.getPublicKey();

// main chain
const EsunChain = new Blockchain();

// create transaction
const transaction = new Transaction(myWalletAddress, yourWalletAddress, 100);
transaction.signTransaction(myWallet.getKey());

EsunChain.addTransaction(transaction);

EsunChain.minePendingTransactions(myWalletAddress);
EsunChain.minePendingTransactions(yourWalletAddress);

console.log(JSON.stringify(EsunChain, null, 4));

console.log(EsunChain.getBalanceOfAddress(myWalletAddress));
console.log(EsunChain.getBalanceOfAddress(yourWalletAddress));
