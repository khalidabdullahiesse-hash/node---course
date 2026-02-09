const fs = require('fs');


const getNote = function() {

}
const addNote = function(title, body){

}
const loadNote = function(){

    try{
        const databuffer = fs.readFileSync('note.json')
        const dataJSON = databuffer.toString();
        return JSON.parse(dataJSON)
    } catch(e){
        fs.writeFileSync('note.json')
        const databuffer =fs.readFileSync('note.json');
        const dataJSON = databuffer.toString();
        return JSON.parse(dataJSON)
    }
}


module.exports = {
    getNote,
    addNote,
    loadNote
}