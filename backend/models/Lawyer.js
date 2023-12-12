const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LawyerSchema = new Schema({
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
    email: {
        type: String,
        required: true,
        unique: true,
    },
    gender: {
        type: String,
        required: true,
    },
    practiceArea: [
        {
            type: String,
        }
    ],
    password: {
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
    barCouncilId: {
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
    reveiws: {
        type: String,
        default: "0",
    },
    ratings: {
        type: String,
        default: "0",
    },
    ratepercall: {
        type: String,
        default: "20",
    },

});


mongoose.models = {};

const Lawyer = mongoose.model("Lawyer", LawyerSchema);

module.exports = Lawyer;