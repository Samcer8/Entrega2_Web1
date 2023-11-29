import logo from './logo.svg';
import './App.css';
import Note from './components/Note.jsx';
import NoteList from './components/NoteList.jsx';
import NoteEditor from './components/NoteEditorr.jsx';
import { useState, useRef, useEffect } from 'react';
import {v4} from 'uuid';

function App() {

  return (
    <div className="App">
        <div>
          <NoteEditor/>
          <NoteList/>
        </div>
    </div>
  );
}

export default App;
