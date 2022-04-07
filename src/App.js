import './App.css';
import React, { useEffect, useState } from 'react';
import { Button, TextField } from '@mui/material';

import db from './firebase';
import firebase from 'firebase';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { blueGrey, brown, grey, lightBlue } from '@mui/material/colors';
import { Routes, Route,BrowserRouter } from "react-router-dom";

import Sign from './components/signs/SignIn';
import Register from './components/signs/SignUp';
import Homepage from './components/homepage';
import Reset from './components/signs/reset';
import Navbar from './components/navbar/navbar';
//import { useNavigate } from "react-router-dom";


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
 // let navigate = useNavigate();  
  const sum = 2;
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  
  // when the app loads, we need to listen to the database and fetch new todos as they get added/removed
 // useEffect(() => {
   // if(firebase.auth().currentUser.uid != null){
     // let path = '/Homepage'; 
       // navigate(path);
     //}
  //}, []);

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
      <div className="App">
        <Navbar></Navbar>
        <Routes>
          <Route exact path ='/' element={<Sign/>} />
          <Route exact path ='/Homepage' element={<Homepage/>} />
          <Route exact path ='Register' element={<Register/>} />
          <Route exact path ='/Reset' element={<Reset/>} />
        </Routes>
        
      </div>
      
    </ThemeProvider>
    
  );
}


export default App;
