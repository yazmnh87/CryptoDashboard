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
    .post( async (req, res) => {
        const arr = req.body
        const newCoin = arr.slice(0,1)
        const savedCoin = new Crypto(newCoin)
        await savedCoin.save(err => {
            err && res.status(500).send(err)
            return res.status(200).send(savedCoin)
            }

        )

    })


    module.exports = cryptoRoute;