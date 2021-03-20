const mongoose = require('mongoose');

const cryptoScheama = new mongoose.Schema({
    userName : "",
    cryptoData : []
});
const cryptos = mongoose.model("cryptos", cryptoScheama);

module.exports = cryptos;