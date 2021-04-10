const mongoose = require("mongoose");
    
const Schema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Mobile: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model ("Employee", Schema);