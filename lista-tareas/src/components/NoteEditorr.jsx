import { useState, useRef, useEffect } from 'react';
import NoteList from './NoteList';

function NoteEditor(){
    const [titleNote, setTitleNote] = useState('');
    const [contentNote, setContentNote] = useState('');
    const [searchText, setSearchText] = useState('');

    const handleNoteAdd = () => {

        const newNote = { id: Date.now(), titleNote, contentNote };

        const almacenNotas = localStorage.getItem('listaNotas');
        const notasExistentes = almacenNotas ? JSON.parse(almacenNotas) : [];

        const actualizaNotas = [...notasExistentes, newNote];

        localStorage.setItem('listaNotas', JSON.stringify(actualizaNotas));
      };

    const handleNoteSearch = () => {
        const almacenNotas = localStorage.getItem('listaNotas');
        const notasExistentes = almacenNotas ? JSON.parse(almacenNotas) : [];

        const endResult = notasExistentes.filter(
            (note) =>
              note.titleNote.toLowerCase().includes(searchText.toLowerCase()) ||
              note.contentNote.toLowerCase().includes(searchText.toLowerCase())
          );
          localStorage.setItem('resultadoBusqueda', JSON.stringify(endResult));
    };

    return(
        <div className="note-editor">
            <h1>
                Aplicación de notas
            </h1>
            <form className='form-todo'>
                <input
                className='input-todo'
                value={searchText}
                type='text'
                placeholder='Busca una tarea'
                name='text'
                onChange={(e) => setSearchText(e.target.value)}
                />
                <button className='button-todo' onClick={handleNoteSearch}>
                Buscar tarea
                </button>
            </form>

            <form className='form-todo'>
                <input
                className='input-todo'
                value={titleNote} 
                type='text'
                placeholder='Titulo de la tarea'
                name='text'
                onChange={(e) => setTitleNote(e.target.value)}
                />
                <input 
                className="input"
                value={contentNote} 
                type="text" 
                placeholder="Contenido de la nota"
                onChange={(e) => setContentNote(e.target.value)}
                />
                <button className='button-todo' onClick={handleNoteAdd}>
                Añadir tarea
                </button>
            </form>
        </div>
    )
}

export default NoteEditor;