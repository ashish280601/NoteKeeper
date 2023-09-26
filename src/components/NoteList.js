import NoteItems from "./NoteItems";
import styles from "../styling/NoteList.module.css";
// import { useRef } from "react";

const NoteList = ({ notes, delNote, changeNotesTOUpdate }) => {
  return (
    <div className={styles.list}>
      {notes.map((note, id) => {
        return <NoteItems 
                  index={id} 
                  note={note} 
                  delNote={delNote}
                  changeNotesTOUpdate={changeNotesTOUpdate} 
                />;
      })}
    </div>
  );
};

export default NoteList;
