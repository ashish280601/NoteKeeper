import { useReducer, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import NoteList from "./components/NoteList";
import NoteKeeper from "./components/Notekeeper";

function App() {

  const [state, dispatch] = useReducer(noteReducers, {notes: []});
  const [notesToUpdate, setNotesToUpdate] = useState(null);


  function noteReducers(state, action) {
    const { formLoad } = action;
    switch (action.type) {
      case "ADD":
        return {
          notes: [formLoad.note, ...state.notes]
        };
      case "REMOVE":
        return {
          notes: state.notes.filter((note) => note.id !== formLoad.id)
        };
        case "UPDATE_NOTE": {
          const notesDuplicate = state.notes;
          notesDuplicate[formLoad.notesPos] = formLoad.note;
          return {
            notes: notesDuplicate
          };
        }
      default:
        return state;
    }
  }

  const addNotes = (note) => {
    dispatch({ type: "ADD", formLoad: {note} });
    console.log("Note added", note);
  };

  const delNote = (id) => {
    dispatch({ type: "REMOVE", formLoad: {id} });
    console.log("Note deleted from the state", id);
  };

  const resetNotesToUpdate = () => {
    setNotesToUpdate(null);
  }

  const updateNotes = (note) => {
    const notesPos = state.notes.map(function(n){
      return n.id;
    })
    .indexOf(note.id);

    if(notesPos == -1){
      return false;
    }

    dispatch({type: "UPDATE_NOTE", formLoad: { notesPos, note}});
    return true;
  }

  return (
    <>
      <Navbar />
      <NoteKeeper
       addNotes={addNotes}
       notesToUpdate={notesToUpdate}
       updateNotes={updateNotes}
       resetNotesToUpdate={resetNotesToUpdate}
      />
      <NoteList
       notes={state.notes}
       delNote={delNote}
       changeNotesTOUpdate={setNotesToUpdate}
      />
    </>
  );
}

export default App;
