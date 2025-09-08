const mongoose = require('mongoose');

//Item Schema
const itemSchema = mongoose.Schema({
    title: { type: String},
    description: { type: String},
    start_price: { type: Number},
    reserve_price: { type: Number}
});

// Define and export
module.exports = mongoose.model('Item', itemSchema);