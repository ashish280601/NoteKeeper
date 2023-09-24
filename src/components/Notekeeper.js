import { useRef, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCirclePlus} from "@fortawesome/free-solid-svg-icons"

import styles from "../styling/NoteKeeper.module.css";

const NoteKeeper = () => {
    // const [isVisible, setVisible] = useState();
    const titleRef = useRef();
    const taglineRef = useRef();
    const inputRef = useRef();

    // const handleChange = () => {
    //     setVisible((current) => !current);
    //     console.log(isVisible)
    // }

    const clearFormInput = () =>{
        titleRef.current.value = "";
        taglineRef.current.value = "";
        inputRef.current.value = "";
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const titleValue = titleRef.current.value;
        const taglineValue = taglineRef.current.value;
        const inputValue = inputRef.current.value

        const noteDetails = {
            title : titleValue,
            tagline : taglineValue,
            input : inputValue
        }
        console.log(noteDetails);
        clearFormInput();
    }

    return(
        <div>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder="Title"
                    className={styles.input}
                    ref={titleRef}
                />
                <input
                    type="text"
                    placeholder="Tagline"
                    className={styles.input}
                    style={{marginTop: 5}}
                    ref={taglineRef}
                />
                <textarea
                    name="content"
                    maxLength={100}
                    placeholder="Take a note..."
                    className={styles.textarea}
                    ref={inputRef}
                    style={{marginTop: 5}}
                />
                <button className={styles.submit}> <FontAwesomeIcon icon={faCirclePlus} /> </button>
            </form>
            
        </div>
    )
}

export default NoteKeeper;