const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

//Item Schema
const itemSchema = new Schema({
    title: { type: String, required: true},
    description: { type: String},
    start_price: { type: Number, required: true},
    reserve_price: { type: Number}
});

// Define and export
module.exports = mongoose.model('Item', itemSchema);