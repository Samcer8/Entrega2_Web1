import Note from "./Note.jsx"
import { useState, useRef, useEffect } from 'react';

function NoteList() {
  const [listaNotas, setListaNotas] = useState([]);
  const [listaBusqueda, setListaBusqueda] = useState([]);

  useEffect(() => {
    const almacenNotas = JSON.parse(localStorage.getItem('listaNotas')) || [];
    const almacenBusqueda = JSON.parse(localStorage.getItem('resultadoBusqueda')) || [];
    setListaNotas(almacenNotas);
    setListaBusqueda(almacenBusqueda);
  }, []);
  

  const handleNoteDelete = (id) => {
    const almacenNotas = listaNotas.filter((note) => note.id !== id);
    setListaNotas(almacenNotas);
    localStorage.setItem('listaNotas', JSON.stringify(almacenNotas));
    setListaBusqueda([]);
  };
  
    return (
      <div className="noteList">
        <h3>Notas</h3>

        {listaBusqueda.length > 0 ? (
          listaBusqueda.map((note) => (
            <Note key={note.id} note={note} onDelete={handleNoteDelete}/>
          ))
        ) : (
          listaNotas.map((note) => (
            <Note key={note.id} note={note} onDelete={handleNoteDelete}/>
          ))
        )}
      </div>
    )
  }
  
  export default NoteList;