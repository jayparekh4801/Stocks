const express = require('express');
const mongoose = require("mongoose");
const app = express()
const port = 8000;
var bodyParser = require('body-parser');
var cors = require('cors');
var http = require('http');
const cryptos = require('./cryptos');

app.use(express.urlencoded());
app.use(express.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json('application/json'));
app.use(cors({ origin: 'http://localhost:4200', optionsSuccessStatus: 200 }));

mongoose.connect('mongodb://localhost/Stocks', { useNewUrlParser: true, useUnifiedTopology: true });

let cryptosData = new cryptos();
cryptosData.userName = "jay0408";
cryptosData.cryptoData = [];
cryptosData.save();

app.post("/saveCryptoData", (req, res) => {
    console.log(req.body);
    cryptos.findOne({userName : "jay0408"}, {cryptoData : 1}, (err, success) => {
        console.log(success);
        success.cryptoData.push(req.body);
        cryptos.updateOne({userName : "jay0408"}, {cryptoData : success.cryptoData}, (err, success) => {
            if(success) {
                res.send({
                    success : true,
                    message :  "data saved",
                    data : null
                });
            }
            else {
                res.send({
                    success :false,
                    message : "data not saved",
                    data : err
                });
            }
        })
    })

})

app.post("/getCryptoData", (req, res) => {
    let requiredCryptoData = [];
    console.log(req.body);
    cryptos.findOne({userName : "jay0408"}, {cryptoData : 1}, (err, success) => {
        if(success) {
            success.cryptoData.forEach(element => {
                element.forEach(element => {
                    if(element.symbol === req.body.symbol) {
                        requiredCryptoData.push(element);
                    }
                })
            });

            res.send({
                success : true,
                message : "data retrieved",
                data : requiredCryptoData
            })
        }
    });
});


app.listen(port, () => {
    console.log(`server is start on ${port}`);
})