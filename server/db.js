const mongoose = require('mongoose');
require('dotenv').config()
var mongoURL = process.env.MONGO_URL;
mongoose.connect(mongoURL, {useUnifiedTopology : true , useNewUrlParser : true})
var connection = mongoose.connection;
connection.on('error', ()=>{
    console.log('MongoDB connection failed');
})
connection.on('connected', ()=>{
    console.log('MongoDB connected successfully');
})

module.exports = mongoose