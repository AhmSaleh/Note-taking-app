const fs = require("fs");
const chalk = require("chalk");

const readNote = (title) => {
    
    const notes = loadNotes();
    const note = notes.find(note => note.title === title)
    
     
    
    if(note){
        console.log(chalk.green.magenta("Title: ") + chalk.gray.underline(note.title));
        console.log(chalk.green.magenta("Body: ") + chalk.gray.underline(note.body));

    } else {
        console.log(chalk.red.inverse("Sorry but there is no note with that Title!"));
    }

}

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find(note => note.title === title)

    if(!duplicateNote){
        
        notes.push({
            title: title,
            body: body
        })
        
        saveNotes(notes);
        console.log(chalk.green("New node Added!"));

    } else {
        console.log(chalk.red.inverse("Sorry but there is a note with the same Title!"));
    }
}

const removeNote = (noteTitle) => {
    const notes = loadNotes();
    const newNotes = notes.filter((note)=> note.title!==noteTitle);
    
    if(notes.length!=newNotes.length){
        console.log(chalk.green(`Note ${noteTitle} has been removed successfully`));
        saveNotes(newNotes);
    } else {
        console.log(chalk.inverse.red("Note doesn't exist to be reomved!"));
    }
    
}

const listNotes = () =>{
    const notes = loadNotes();
    console.log(chalk.green("All Notes Names: "))
    notes.forEach(note => {
        console.log(note.title);
    });
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync("notes.json", dataJSON);
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync("notes.json");
        const dataJSON = dataBuffer.toString();
        return dataObj = JSON.parse(dataJSON);      

    }catch(e){
        return []; 
    }
}


module.exports = {
    readNote: readNote,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes     
};


