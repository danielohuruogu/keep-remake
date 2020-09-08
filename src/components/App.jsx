import React, { useState } from "react"
import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Note from "./Note.jsx"
import CreateArea from "./CreateArea.jsx"

function App () {
    const [noteItems, setNoteItems] = useState([])

    function addNote(newNote) { //receives info from prop below
        setNoteItems((prevNotes) => {
            return [...prevNotes, newNote];//whatever the info is, it's added onto the end here
        });
        console.log(newNote);
    }

    function deleteNote(id) { //function takes the argument of ID, which was previously passed through to it
        setNoteItems((prevNotes) => { //setting the array with previous note state
            return prevNotes.filter((item,index) => { //a filter has been placed on the previous state (the notes added up until then)
                return index !== id;//searching by made-up ID (which isn't ideal),
            }); // an array is returned that does not include the index of the note in question
        });
    }

    return(
        <div>
            <Header />
            <CreateArea onAdd={addNote}/>
            {noteItems.map((note, index) => (
                <Note
                    key = {index}
                    id={index}
                    title = {note.title}
                    content = {note.content}
                    onClicked = {deleteNote} //onClicked, the function runs
                />) )}
            <Footer />
        </div>
    )
}

export default App