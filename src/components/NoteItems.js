import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbtack } from "@fortawesome/free-solid-svg-icons";

import styles from "../styling/NoteItems.module.css"; 
import EditImage from "../images/edit.png";
import DeleteImage from "../images/trash-bin.png";

const NoteItems = ({
  note,
  index,
  delNote,
  changeNotesTOUpdate
}) => {
  const [currentHoverIndex, setCurrentHoverIndex] = useState(null);

  return (
    <div className={styles.itemsLists}>
      <div className={styles.container}
        key={note.id}
        onMouseOver={() => {
          setCurrentHoverIndex(index);
        }}
        onMouseLeave={() => {
          setCurrentHoverIndex(null);
        }}
      >
        <div className={styles.title}>{note.title}</div>
        <div className={styles.tagline}>{note.tagline}</div>
        <div className={styles.body}>{note.input}</div>
        <div className={styles.time}>Edit time{note.id}</div>
        <div 
          className={`${styles.btnContainer} ${
            currentHoverIndex === index && styles.active
          }`}
        >
          <div className={styles.edit} onClick={() => {changeNotesTOUpdate(note)}}>
            <img src={EditImage} height="30" alt="Edit" />
          </div>
          <div className={styles.delete} onClick={() => delNote(note.id)}>
            <img src={DeleteImage} height="30" alt="Delete" />
          </div>
          <div className={styles.pinned}> 
            <FontAwesomeIcon icon={faThumbtack} height={30} className={styles.img}/> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteItems;
