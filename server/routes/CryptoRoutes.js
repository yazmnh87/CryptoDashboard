const express = require('express');
const cryptoRoute = express.Router();
const Crypto = require('../models/CryptoSchema.js');

cryptoRoute.route('/')
    .get((req, res) => {
        console.log('get request hit');
        Crypto.find((err, currencies) => {
            if(err) {
                res.status(500)
                return res.send(err);
            } else {
                res.status(200)
                return res.send(currencies);
            }
        })
    })

    module.exports = cryptoRoute;