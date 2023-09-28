import React from "react";
import styles from "../styling/NoteKeeper.module.css"

const DummyNote = ({togglePage}) => {
    return(
        <form className={styles.form} >
                <input 
                    type="text"
                    placeholder="Take a note..."
                    className={styles.input}
                    onClick={togglePage}
                />
        </form>
    )
}

export default DummyNote;