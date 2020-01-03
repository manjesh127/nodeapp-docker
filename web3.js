const Web3 = require('web3');

/**
 * Web3 Connects To Ethereum Node
 */
let web3;

if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    web3 = new Web3(new Web3.providers.HttpProvider(global.config.eth_provider));
    web3.eth.getBlockNumber().then((result) => {
        console.log("ethereum current block", result)
    }).catch((err) => {
        console.log("rpc error", err)
    });

}

module.exports = web3;