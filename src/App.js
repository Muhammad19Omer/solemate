import './App.css';
import React, { useEffect, useState } from 'react';
import { Button, TextField } from '@mui/material';

import db from './firebase';
import firebase from 'firebase';
import PMHeader from './components/product_manager/PMHeader';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { blueGrey, brown, grey, lightBlue } from '@mui/material/colors';
import { Routes, Route } from "react-router-dom";
import PMHome from './components/product_manager/PMHome';
import ManageProducts from './components/product_manager/ManageProducts';
import ManageDeliveries from './components/product_manager/ManageDeliveries';
import ManageComments from './components/product_manager/ManageComments';


/*function App() {
  const sum = 2;
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  
  // when the app loads, we need to listen to the database and fetch new todos as they get added/removed
  useEffect(() => {
    // this code fires when the app.js loads
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      console.log((snapshot.docs.map(doc => doc.data().todo)));
      setTodos(snapshot.docs.map(doc => doc.data().todo))
    })
  }, []);

  const addTodo = (event) => {
    event.preventDefault();

    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })
    setInput('');
  }

  return (
    <div className="App">
      <h1>HELLO WORLD {sum}</h1>
      <form>
        <TextField label="Enter a Todo" value={input} onChange={event => setInput(event.target.value)} variant="standard" />
        <Button disabled={!input} type="submit" onClick={addTodo} variant="outlined">
          Add
        </Button>
        
      </form>
      <ul>
        {todos.map(todo => (
          <Todo text={todo}/>
        ))}
        
      </ul>
    </div>
  );
}*/

const theme = createTheme({
  palette: {
    primary: {
      main: lightBlue[800],
    },
    secondary: {
      main: grey[300],
    },
  }
});

function App() {
  const sum = 2;
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  
  // when the app loads, we need to listen to the database and fetch new todos as they get added/removed
  useEffect(() => {
    // this code fires when the app.js loads
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      console.log((snapshot.docs.map(doc => doc.data().todo)));
      setTodos(snapshot.docs.map(doc => doc.data().todo))
    })
  }, []);

  const addTodo = (event) => {
    event.preventDefault();
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })
    setInput('');
  }

  return (
    <ThemeProvider theme={theme}>
      <PMHeader />
      <Routes>
        <Route path="/" element={ <PMHome /> } />
        <Route path="/manageProducts" element={ <ManageProducts /> } />
        <Route path="/manageDeliveries" element={ <ManageDeliveries /> } />
        <Route path="/manageComments" element={ <ManageComments /> } />
      </Routes>
      
    </ThemeProvider>
    
  );
}


export default App;
