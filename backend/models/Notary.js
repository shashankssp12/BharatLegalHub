const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NotariesSchema = new Schema({
    profilePic: {
        type: String,
    },
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: false,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    gender: {
        type: String,
        required: true,
    },
    experience: {
        type: Number,
        required: true,
    },
    address: {
        type: Object,
        required: true,
    },
    courtEstablishment: [{
        type: String,
    }],
    desc: {
        type: String,
        required: true,
    },
    languages: [{
        type: String,
    }]

})

mongoose.models = {};

const Notaries = mongoose.model("Notaries", NotariesSchema);

module.exports = Notaries;