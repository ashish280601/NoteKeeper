import styles from "../styling/NoteKeeper.module.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCirclePlus} from "@fortawesome/free-solid-svg-icons"

const NoteKeeper = () => {
    return(
        <>
            <form className={styles.form}>
                <input 
                    type="text"
                    placeholder="Take a note..."
                    className={styles.input}
                    style={{margin: 0}}
                />
                <button className={styles.submit}> <FontAwesomeIcon icon={faCirclePlus} /> </button>
            </form>
            <form className={styles.form}>
                <input 
                    type="text"
                    placeholder="Title"
                    className={styles.input}
                />
                <input
                    type="text"
                    placeholder="Tagline"
                    className={styles.input}
                    style={{marginTop: 5}}
                />
                <textarea
                    maxLength={100}
                    rows={30}
                    cols={33}
                    placeholder="Take a note..."
                    className={styles.textarea}
                    style={{marginTop: 5}}
                />
                <button className={styles.submit} style={{top: 150}}> <FontAwesomeIcon icon={faCirclePlus}/> </button>
            </form>
        </>
    )
}

export default NoteKeeper;