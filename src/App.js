import './App.css';
import React, { useEffect, useState } from 'react';
import { Button, TextField } from '@mui/material';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';
import PMHeader from './components/product_manager/PMHeader';
import MiniDrawer from './components/product_manager/PMHeader';
import { createTheme, ThemeProvider } from '@material-ui/core';
import { purple } from '@mui/material/colors';

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
      main: '#fefefe',
    },
    secondary: purple,
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
      <MiniDrawer/>
    </ThemeProvider>
    
  );
}


export default App;
