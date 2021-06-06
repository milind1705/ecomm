const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
    },
    profile:{
        type:String
    }
    
})
module.exports = mongoose.model('User', userSchema)