import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLightbulb} from "@fortawesome/free-solid-svg-icons"

import NoteItems from "./NoteItems";
import styles from "../styling/NoteList.module.css";
import Pagination from "./Pagination";


const NoteList = ({
   notes,
   delNote,
   changeNotesTOUpdate,
}) => {
  
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 6;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = notes.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(notes.length / recordsPerPage);
  const numbers = [...Array(nPage + 1).keys()].slice(1);

  const nextPage = () => {
    if (currentPage !== nPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prePage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const changeCPage = (id) => {
    setCurrentPage(id);
  };

  return (
    <>
      <div className={styles.list}>
        {records.map((note, id) => {
          return (
            <NoteItems
              index={id}
              note={note}
              delNote={delNote}
              changeNotesTOUpdate={changeNotesTOUpdate}
            />
          );
        })}
      </div>
      {
          notes.length > 0 
          ? 
          <Pagination
            prePage={prePage}
            currentPage={currentPage}
            changeCPage={changeCPage}
            nextPage={nextPage}
            numbers={numbers}
          /> 
          :  
          <div className={styles.header}>
            <p><FontAwesomeIcon icon={faLightbulb} width="75%"  className={styles.icon}/></p>
            <h1 className={styles.header}>Notes you add appear here</h1>
          </div>
        }
    </>
  );
};

export default NoteList;
