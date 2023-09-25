import styles from "../styling/NoteItems.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";

const NoteItems = ({note, delNote}) => {
  return (
    <div className={styles.itemsLists}>
      <div className={styles.container} key={note.id}>
        <div className={styles.title}>{note.title}</div>
        <div className={styles.tagline}>{note.tagline}</div>
        <div className={styles.body}>{note.input}</div>
        <div className={styles.edit}>
          <FontAwesomeIcon icon={faPencil} />
        </div>
        <div onClick={() => delNote(note.id)}>
          <FontAwesomeIcon icon={faTrash} />
        </div>
      </div>
    </div>
  );
};

export default NoteItems;
