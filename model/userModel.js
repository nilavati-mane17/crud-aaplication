const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    // id : {
    //     type : Number
    // },
    name: {
        type : String,
        required : true
    },
    email: {
        type : String,
        required : true
    },
    password: {
        type: String,
        required : true
    },
    address: {
        type : String,
        required : true
    },
    timestamps: {
        type: String, default: (new Date()),
        createdAt: true,
        updatedAt: true,
    }
})

module.exports = mongoose.model('user', userSchema);