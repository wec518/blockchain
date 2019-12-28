const { Blockchain, Transaction} = require('./blockchain')
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey= ec.keyFromPrivate('d5e4af71a0e7f75c9576552531c3caaab69d6404fff2180dfb93efb17383659e')

const myWalletAddress = myKey.getPublic('hex')


let tommyCoin = new Blockchain()

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 50);
tx1.signTransaction(myKey);
tommyCoin.addTransaction(tx1);


console.log('\n start the miner...')
tommyCoin.minePendingTransactions(myWalletAddress)

console.log('\nBalance of Xavier is ',tommyCoin.getBalanceAddress(myWalletAddress));

tommyCoin.chain[1].transactions[0].amount = 1
console.log('Is chain valid?', tommyCoin.isChainValid())

console.log(tommyCoin)