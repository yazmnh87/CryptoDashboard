const mongoose = require('mongoose');

const cryptoSchema = new mongoose.Schema ({
    Coins: {
        asset_id: String,
        data_end: String,
        data_orderbook_end: String,
        data_orderbook_start: String,
        data_quote_end: String,
        data_quote_start: String,
        data_start: String,
        data_symbols_count: Number,
        data_trade_count: Number,
        data_trade_end: String,
        data_trade_start: String,
        name: String,
        type_is_crypto: Number
    }

})

module.exports = mongoose.model('Crypto', cryptoSchema)