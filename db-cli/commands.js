const { Command } = require('commander');
const {
    addItem,
    findItem
} = require('./index');

const program = new Command();

program
    .version('1.0.0')
    .description('Item Management System')

program
    .command('add <title> <description> <start_price> <reserve_price>')
    .alias('a')
    .description("Add a item")
    .action((title, description, start_price, reserve_price) => {
        addItem({title, description, start_price, reserve_price});
    });

program
    .command('find <title>')
    .alias('f')
    .description('Find a item')
    .action(title => findItem(title));


program.parse(process.argv);