import React, { useState } from "react";

function CreateArea(props) {
    const [newNote, setNewNote] = useState({
        title: "",
        content: "",
    })

    function handleChange(event) {
        const {name, value} = event.target

        setNewNote((prevValue) => {
            if (name==="title") {
            return {
                title: value,
                content: prevValue.content
            }
            } else if (name==="content") {
                return {
                    title: prevValue.title,
                    content: value
                }
            }
        })
    }

    function submitNote(event) { //takes the anonymous function I created below and turns it into a named one
        event.preventDefault(); //a function is created so that, on clicking, newNote is passed through prop and data is reset
        props.onAdd(newNote); //passing the new state on clicking a button
        setNewNote(""); //onAdd is a class that is taking the argument of the new state
    }

    return ( 
        <div>
            <form className="create-note">
                <input //need to get states of the input to the notes
                    name = "title"
                    value = {newNote.title}
                    placeholder = "Title"
                    onChange = {handleChange} / > 
                <textarea
                    name = "content"
                    value = {newNote.content}
                    placeholder = "Take a note..."
                    rows = "3"
                    onChange = {handleChange}
                    />
                <button
                    onClick= {submitNote}
                    >
                        Add
                </button>
            </form>
        </div>
    );
}

export default CreateArea;
