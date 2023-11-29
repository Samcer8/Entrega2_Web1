function Note({ note, onDelete }) {

    return (
      <div className="note">
        <h3>
            {note.titleNote}
        </h3>
        <p>
            {note.contentNote}
        </p>
        <button onClick={() => onDelete(note.id)}>
            Eliminar
        </button>
      </div>
    );
  }
  
  export default Note;