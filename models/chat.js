const mongoose = require("mongoose");


const chatSchema = new mongoose.Schema({
    from: {
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true
    },
    msg: {
        type: String,
        maxlength: 70
    },
    created_at: {
        type: Date,
        required: true
    }
});


const chat = new mongoose.model("chat", chatSchema);

module.exports = chat;