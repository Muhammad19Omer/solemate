import React, { useEffect, useState, Component } from 'react';
import { Button, TextField } from '@mui/material';
import firebase from 'firebase';
//import Todo from './Todo';
import db from '../../firebase';
import  {FaFacebook}  from "react-icons/fa";
import  {FaGoogle}  from "react-icons/fa";
import  {FaApple}  from "react-icons/fa";
import "firebase/firestore";
import { useNavigate } from "react-router-dom";

function Register () {
  let navigate = useNavigate();  
    const [username, setUsername] = useState([]);
    const [rpass, setrpass] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const signup = (event) => {
        event.preventDefault();
        //registerWithEmailAndPassword(username,email,password);
       const res = firebase.auth().createUserWithEmailAndPassword(email,password)
            .then(() =>{
                const user = firebase.auth().currentUser;
                db.collection('users').add({
                     uid: user.uid,
                     user: username,
                     pass: password,
                     email: email,
                     timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                   })
                   
                   if(firebase.auth().currentUser.uid != null){
                    let path = '/Homepage'; 
                      navigate(path);
                   }
        })
        setUsername('');
                   setrpass('');
                   setPassword('');
                   setEmail('');
  
                }
  
    return (
    <div className="wrap-login100">
      <div className="login100-pic">
        <a href="/">
          <img
            src="https://t4.ftcdn.net/jpg/02/34/14/01/360_F_234140114_P6F2WevPp2iilkFJmoLOmlApM0Nn57AL.jpg"
            alt="img"
          />
        </a>
      </div>

      <form className="login100-form">
        <span className="login100-form-title">REGISTER</span>
        <div className="wrap-input100">
          <input
            className="input-field"
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
        </div>

        <div className="wrap-input100">
          <input
            className="input-field"
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={event => setUsername(event.target.value)}
          />
        </div>

        <div className="wrap-input100">
          <input
            className="input-field"
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
        </div>

        <div className="wrap-input100">
          <input
            className="input-field"
            type="password"
            name="confirm_password"
            placeholder="Confirm Password"
            value={rpass}
            onChange={event => setrpass(event.target.value)}
          />
        </div>

        <div className="container-login100-form-btn">
          <button className="login100-form-btn" type="submit" onClick={signup}>Register</button>
        </div>

        <div className="loginText">
          Sign Up With
        </div>
        <div className="social-icons">
          <button>
            <FaFacebook className="social-icon" size={30} />
          </button>
          <button>
            <FaGoogle className="social-icon" size={30} />
          </button>
          <button>
            <FaApple className="social-icon" size={30} />
          </button>
        </div>
        <div class="text-center p-t-116">
              <a class="txt2" href="/">
                Already have an account? 
              </a>
            </div>
      </form>
    </div>
  );
}

export default Register;