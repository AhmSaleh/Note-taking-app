const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes");
const fs = require("fs");
const { argv } = require("process");

// customize yargs version
yargs.version('1.0.0');

// Add 
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Description',
            demandOption: true,
            type: 'string'            
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body);    
    }
});

// Remove
yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv){
        notes.removeNote(argv.title);
    }
}); 

// List 
yargs.command({
    command:'list',
    describe: 'list a note',
    handler: function(){
        notes.listNotes();
    }
})

// Read 
yargs.command({
    command:'read',
    describe: 'read a note',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.readNote(argv.title);
    }
})

yargs.parse();


