import NoteItems from "./NoteItems";
import styles from "../styling/NoteList.module.css";

const NoteList = ({notes, delNote}) => {
  return (
    <div className={styles.list}>
      {
        notes.map((note, id) => {
            return(
                <NoteItems
                    index={id}
                    note={note}
                    delNote={delNote}
                />
            )
        })
      }
    </div>
  );
};

export default NoteList;
