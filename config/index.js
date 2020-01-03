const config = {
    development: {
        db_uri: `mongodb://127.0.0.1:27017/testing`,
        eth_provider: `https://rinkeby.infura.io/v3/87d8eb0d3c004535bced571f19986f18`,
        btc_provider: `http://${process.env.BTC_RPC_USER}:${process.env.BTC_RPC_PASS}@15.206.59.164:8332`,
        node: "testnet"
    },
    production: {
        db_uri: `mongodb://127.0.0.1:27017/testing`,
        eth_provider: `https://rinkeby.infura.io/v3/87d8eb0d3c004535bced571f19986f18`,
        btc_provider: `http://${process.env.BTC_RPC_USER}:${process.env.BTC_RPC_PASS}@15.206.59.164:8332`,
        node: "testnet"
    }
}

module.exports = config[(process.env.NODE_ENV || 'development')];