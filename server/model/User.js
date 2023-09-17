
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');


const UserSchema = mongoose.Schema
var User = new UserSchema({
    gender: {
        type: String,
        // required: true,
    },
    name: {
        type: String,
        // required: true,
    },
    surname: {
        type: String,
        // required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})


// check field unique if true and validate it before to send to DB
User.plugin(uniqueValidator);

module.exports = mongoose.model('User', User)
