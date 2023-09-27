import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCirclePlus, faThumbtack} from "@fortawesome/free-solid-svg-icons"

import styles from "../styling/NoteKeeper.module.css";

const NoteKeeper = ({
    addNotes,
    notesToUpdate,
    updateNotes,
    resetNotesToUpdate,
    isPinned,
    pinnedNotes
}) => {
    
    const titleRef = useRef();
    const taglineRef = useRef();
    const inputRef = useRef();
    var value = 0
    var [ count, setCount ] = useState(value);

  const handleCount =() =>{
    setCount((cur) => cur+=1);
    console.log("Count :",count); 
  }

    useEffect(() => {
        if (!notesToUpdate) return;
        titleRef.current.value = notesToUpdate.title;
        taglineRef.current.value = notesToUpdate.tagline;
        inputRef.current.value = notesToUpdate.input;

    }, [notesToUpdate]);

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

        if(!notesToUpdate) {
            const noteDetails = {
                title: titleValue,
                tagline: taglineValue,
                input: inputValue,
                // time: new getHo().getMin(),
                id: new Date().getTime(),
            };
            addNotes(noteDetails);
            clearFormInput();
            return;
        }

        const noteDetails = {
            title: titleValue,
            tagline: taglineValue,
            input: inputValue,
            id: notesToUpdate.id
        };

        const result = updateNotes(noteDetails);
        if(!result) return;
        clearFormInput();
        resetNotesToUpdate();
    };

    return(
        <div style={{position:"relative"}}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.pinned} onClick={pinnedNotes}>
                    {}<FontAwesomeIcon icon={faThumbtack} />
                </div>
                <input 
                    type="text"
                    placeholder="Title"
                    className={styles.input}
                    ref={titleRef}
                    style={{fontWeight:700}}
                />
                <input
                    type="text"
                    placeholder="Tagline"
                    className={styles.input}
                    style={{marginTop: 5, fontWeight:500}}
                    ref={taglineRef}
                />
                <textarea
                    name="content"
                    required
                    maxLength={100}
                    placeholder="Take a note..."
                    className={styles.textarea}
                    ref={inputRef}
                    style={{marginTop: 5}}
                />
                <button className={styles.submit} onSubmit={handleCount}> <FontAwesomeIcon icon={faCirclePlus} /> </button>
            </form>
            
        </div>
    )
}

export default NoteKeeper;