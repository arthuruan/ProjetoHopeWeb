const mongoose = require('mongoose');

const CardSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    type: {
        type: String,
        require: true,
    },
    description: {
        type: String,
    },
    link: {
        type: String,
    },
    image: {
        type: String,
    }
});

module.exports = mongoose.model('Card', CardSchema);