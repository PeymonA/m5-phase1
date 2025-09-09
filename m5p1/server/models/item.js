const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

//Item Schema
const itemSchema = new Schema({

    title: { 
        type: String, 
        required: true, 
        trim: true
    },

    description: { 
        type: String,
        trim: true,
        lowercase: true,
    },

    start_price: { 
        type: Number, 
        required: true,
        validate(value) {
            if (value < 0) throw new Error("Negative values are not allowed");
        }
    },

    reserve_price: { 
        type: Number,
        validate(value) {
            if (value < 0) throw new Error("Negative values are not allowed");
        },
    }
});

// Define and export
module.exports = mongoose.model('Item', itemSchema);