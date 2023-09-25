import { useReducer } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import NoteList from './components/NoteList';
import NoteKeeper from './components/Notekeeper';

function App() {

  const [notes, dispatch] = useReducer(noteReducers, []);

  function noteReducers(state, action){
    switch(action.type){
      case 'ADD':
        return [action.note, ...state];
      case 'REMOVE':
        return state.filter((note) => note.id !== action.id);
      default:
        return notes;
    }
  }

  const addNotes = (note) => {
    dispatch({type: 'ADD', note})
    console.log("Note added", note);
  }

  const delNote =(id) =>{
    dispatch({type:'REMOVE', id})
    console.log("Note deleted from the state", id)
  }

  return (
    <>
      <Navbar/>
      <NoteKeeper addNotes={addNotes}/>
      <NoteList 
        notes={notes}
        delNote={delNote}
      />
    </>
  );
}

export default App;
