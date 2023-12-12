const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CallScheduleSchema = new Schema({
    citizen: {
        type: Schema.Types.ObjectId,
        ref: "Citizen",
    },
    lawyer: {
        type: Schema.Types.ObjectId,
        ref: "Lawyer",
    },
    time: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        default: "pending",
    }
});

mongoose.models = {};

const CallSchedule = mongoose.model("CallSchedule", CallScheduleSchema);

module.exports = CallSchedule;