const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    email: String,
    full_name: String,
    password: String,
    isAdmin: Boolean,
    toWatch: [{type: mongoose.Schema.Types.ObjectId, ref: 'film'}],
    watched: [{type: mongoose.Schema.Types.ObjectId, ref: 'film'}]
})

module.exports = mongoose.model('user', UserSchema)