const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema
const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    serverRoomName: {
        type: String,
        trim: true,
    },
    clientRoomName: {
        type: String,
        trim: true
    }
});

module.exports  = mongoose.model("User", UserSchema);