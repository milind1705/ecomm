const express = require('express');
const mongoose = require('mongoose');


mongoose.connect(process.env.MONGO_URL, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true
})
mongoose.connection.once("open", () => {
    console.log('connected to database')
});