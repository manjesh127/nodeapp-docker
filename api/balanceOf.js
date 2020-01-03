var web3 = require('../web3')
var BN = require('bignumber.js')

module.exports = {
    getBalance: async (req, res) => {
        try {
            // console.log("workings latest")
            // let data = web3.utils.sha3('balanceOf(address)').slice(0, 10) + '0'.repeat(24) + ("0x030810339E7441AEd6639Eda5d7d6B65aF0fD518").substring(2);
            // // console.log(data)
            // let balance = await web3.eth.call({
            //     to: "0x93d5c84a6638910434860f9ed61e6561c561f1a9",
            //     data: data
            // });
            // // console.log(balance)
            // console.log(BN(balance).div(Math.pow(10, 18)).toString());
            // setInterval(async () => {
            var nonce = await web3.eth.getTransactionCount("0x030810339E7441AEd6639Eda5d7d6B65aF0fD518", "pending")
            console.log("=======>> nonce ", nonce)
            var balance = await web3.eth.getBalance("0x030810339E7441AEd6639Eda5d7d6B65aF0fD518")
            console.log("=======>> balance", web3.utils.fromWei(balance, "ether"))
            web3.eth.accounts.signTransaction({
                    from: "0x030810339E7441AEd6639Eda5d7d6B65aF0fD518",
                    to: "0xCCc55538aFF8E496CEC41D242e6B82baC54A6320",
                    value: web3.utils.toWei("2", "ether"),
                    gas: "21000",
                    nonce: web3.utils.toHex(nonce)
                }, '0x<Private key>')
                .then(async (rawTxn) => {

                    console.log('send ether raw txn', rawTxn.rawTransaction);

                    web3.eth.sendSignedTransaction(rawTxn.rawTransaction).then(done => {
                        console.log("l", done)
                    }).catch(e => {
                        console.log("EE", e)
                    })

                }).catch((err) => {
                    console.log('error in this transaction', err)

                });

            // }, 2000)

        } catch (error) {
            console.log("get balance contract address error", error)
        }
    }
}