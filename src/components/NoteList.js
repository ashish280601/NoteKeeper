import NoteItems from "./NoteItems";


const NoteList = ({notes, delNote}) => {
  return (
    <div style={{ width: "75%", height: "auto", margin: "auto" }}>
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
