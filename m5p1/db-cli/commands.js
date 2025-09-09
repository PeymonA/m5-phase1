#!/usr/bin/env node
const { Command } = require('commander');
const { prompt } = require('inquirer');

const {
    addItem,
    findItem,
    updateItem,
    removeItem,
    listItems,
    seed
} = require('./index');

// Item Questions
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Item Title'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Item Description'
    },
    {
        type: 'input',
        name: 'start_price',
        message: 'Item Start Price'
    },
    {
        type: 'input',
        name: 'reserve_price',
        message: 'Item Reserve Price'
    }
];


const program = new Command();

program
    .version('1.0.0')
    .description('Item Management System')

// Add Command
// program
//     .command('add <title> <description> <start_price> <reserve_price>')
//     .alias('a')
//     .description("Add a item")
//     .action((title, description, start_price, reserve_price) => {
//         addItem({title, description, start_price, reserve_price});
//     });
program
    .command('add')
    .alias('a')
    .description('Add a item')
    .action(() => {
        prompt(questions).then(answers => addItem(answers));
    });

// Find Command
program
    .command('find <title>')
    .alias('f')
    .description('Find a item')
    .action(title => findItem(title));

// Update Command
program
    .command('update <_id>')
    .alias('u')
    .description('Update a item')
    .action(_id => {
        prompt(questions).then(answers => updateItem(_id, answers));
    });

// Remove Command
program
    .command('remove <_id>')
    .alias('r')
    .description('Remove a item')
    .action(_id => removeItem(_id));

// List Command
program
    .command('list')
    .alias('l')
    .description('List all items')
    .action(() => listItems());

// Seed DB
program
    .command('seed')
    .alias('s')
    .description('Seed DB')
    .action(() => seed());

program.parse(process.argv);