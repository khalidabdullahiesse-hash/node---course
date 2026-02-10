import fs from 'fs';

export const getNote = function() {

}
export const addNote = function(title, body){
    const notes = loadNote();

    notes.push({
        title: title,
        body: body,
    })
     saveNote(notes);
}



export const saveNote = function(notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('note.json', dataJSON);
}
export const loadNote = function(){

    try{
        const databuffer = fs.readFileSync('note.json')
        const dataJSON = databuffer.toString();
        return JSON.parse(dataJSON)
    } catch(e){
        return[]
    }
}

