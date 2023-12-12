const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CitizenSchema = new Schema({
    profilePic: {
        type: String,
    },
    fullname: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: false,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    address: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    languages: [{
        type: String,
    }],
    gender: {
        type: String,
        required: true,
    },
});

mongoose.models = {};

const Citizen = mongoose.model("Citizen", CitizenSchema);

module.exports = Citizen;