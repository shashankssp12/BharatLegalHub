const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ArbitratorsSchema = new Schema({
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
        unique: true,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
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

});

mongoose.models = {};

const Arbitrators = mongoose.model("Arbitrators", ArbitratorsSchema);

module.exports = Arbitrators;
