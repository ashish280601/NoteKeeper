import { useReducer, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import NoteList from "./components/NoteList";
import NoteKeeper from "./components/Notekeeper";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "bootstrap/dist/css/bootstrap.css";
import DummyNote from "./components/DummyNote";

function App() {

  const [state, dispatch] = useReducer(noteReducers, {notes: []});
  const [notesToUpdate, setNotesToUpdate] = useState('');
  const [isNotePage, setIsNotePage] = useState(false);

  function noteReducers(state, action) {
    const { formLoad } = action;
    console.log("total",state.notes);
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
    toast.success("Note Added Successful",{
      style:{background:"#100e10",color:"#fff",fontSize:20}
    });
  };

  const delNote = (id) => {
    dispatch({ type: "REMOVE", formLoad: {id} });
    toast.success("Note Deleted Successful",{
      style:{background:"red",color:"#fff",fontSize:20}
    });
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

    if(notesPos === -1){
      return false;
    }

    dispatch({type: "UPDATE_NOTE", formLoad: { notesPos, note}});
    toast.success("Note Edited Successful",{
      style:{background:"#5686db",color:"#fff",fontSize:20}
    });
    return true;
  }

  const togglePage = () => {
    setIsNotePage(!isNotePage);
  }

  return (
    <>
      <Navbar />
      {
        isNotePage
         ?
         <NoteKeeper
          addNotes={addNotes}
          notesToUpdate={notesToUpdate}
          updateNotes={updateNotes}
          resetNotesToUpdate={resetNotesToUpdate}
          />
          :
         <DummyNote 
          togglePage={togglePage}
         />
      }
      <NoteList
       notes={state.notes}
       delNote={delNote}
       changeNotesTOUpdate={setNotesToUpdate}
      />
      <ToastContainer/>
    </>
  );
}

export default App;
