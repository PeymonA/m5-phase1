const mongoose = require('mongoose');

// Map global promise
mongoose.Promise = global.Promise;
// Connect to db
const db = mongoose.connect('mongodb://localhost:27017/db-cli');

// Import model
const Item = require('./models/item');

// Add Item
const addItem = (item) => {
    Item.create(item).then(item => {
        console.info('New Item Added');
        mongoose.connection.close();
    });
}

// Find Item
const findItem = (title) => {
    // Make case insensitive
    const search = new RegExp(title, 'i');
    Item.find({ title: search})
        .then(item => {
            console.info(item);
            console.info(`${item.length} matches`);
            mongoose.connection.close();
        });
}

// Export All Methods
module.exports = {
    addItem,
    findItem
}