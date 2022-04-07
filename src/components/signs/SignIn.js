

//import { signUp } from '../../store/actions/authActions';
//import { Navigate } from 'react-router-dom';
import React, { useEffect, useState, Component } from 'react';
import { Button, TextField } from '@mui/material';
import firebase from 'firebase';
//import Todo from './Todo';
import db from '../../firebase';
import  {FaFacebook}  from "react-icons/fa";
import  {FaGoogle}  from "react-icons/fa";
import  {FaApple}  from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
//import { getAuth } from "firebase/auth";

import collection from "firebase/firebase-firestore";
//import getFirestore from "firebase/firebase-firestore";
import query from "firebase/firebase-firestore";
//import getDocs from "firebase/firebase-firestore";
import where from "firebase/firebase-firestore";
import addDoc from "firebase/firebase-firestore";



//import { auth, signInWithEmailAndPassword, registerWithEmailAndPassword } from "../../fbauth";
function Sign(){

  //const [isPending, startTransition] = useTransition();
  let navigate = useNavigate();  
  //const auth = firebase.auth;
  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const provider = new firebase.auth.GoogleAuthProvider;
    const provider1 = new firebase.auth.FacebookAuthProvider;

    const google= async(event)=>{
      event.preventDefault();
      try{
      firebase.auth().signInWithPopup(provider).then(()=>{
    // This gives you a Google Access Token. You can use it to access the Google API.
    //const credential = firebase.auth.GoogleAuthProvider.credentialFromResult(result);
    //const token = credential.accessToken;
    // The signed-in user info.
    const user = firebase.auth().currentUser;
    const q = db.collection('users').where("uid", "==", user.uid).get().then((snapshot)=>{
    //const q = db.collection('users').doc(user.uid).get().then((snapshot)=>{
    const docs =  snapshot.docs;

    console.log(docs);
    if (docs.length == 0) {
       db.collection('users').add( {
        uid: user.uid,
        username: user.displayName,
        authProvider: "google",
        password:"googlesignin",
        email: user.email,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }
  });
  }).then(()=>{
    if(firebase.auth().currentUser != null){
      let path = '/Homepage'; 
        navigate(path);
     }
    });
  } catch(error){
     //Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
     //The email of the user's account used.
    const email = error.email;
     //The AuthCredential type that was used.
    const credential = firebase.auth.GoogleAuthProvider.credentialFromError(error);
     
  //});
    }
  }
    const facebook= async(event)=>{
      event.preventDefault();
      try{
      firebase.auth().signInWithPopup(provider1).then(() => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    //const credential = firebase.auth.GoogleAuthProvider.credentialFromResult(result);
    //const token = credential.accessToken;
    // The signed-in user info.
    const user = firebase.auth().currentUser;
    const q = db.collection('users').where("uid", "==", user.uid).get().then((snapshot)=>{
      //const q = db.collection('users').doc(user.uid).get().then((snapshot)=>{
      const docs =  snapshot.docs;
  
      console.log(docs);
      if (docs.length == 0) {
         db.collection('users').add( {
          uid: user.uid,
          username: user.displayName,
          authProvider: "facebook",
          password:"fbsignin",
          email: user.email,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
      }
    });
    }).then(()=>{
      if(firebase.auth().currentUser != null){
        let path = '/Homepage'; 
          navigate(path);
       }
      });
    } catch(error){
       //Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
       //The email of the user's account used.
      const email = error.email;
       //The AuthCredential type that was used.
     // const credential = firebase.auth.GoogleAuthProvider.credentialFromError(error);
       
    //});
      }
    }














    const sendPasswordReset = async (email) => {
      try {
        firebase.auth().sendPasswordResetEmail('hashira690@gmail.com');
        alert("Password reset link sent!");
      } catch (err) {
        console.error(err);
        alert(err.message);
      }
    };


    
    const HandleLogin = (event) => {
      event.preventDefault();
      try {
        firebase.auth().signInWithEmailAndPassword(email, password).then(()=>{
          if(firebase.auth().currentUser != null){
            let path = '/Homepage'; 
              navigate(path);
           }
          });

      } catch (err) {
        console.error(err);
        alert(err.message);
      }
     // navigate('/Homepage');
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
            <span className="login100-form-title">LOGIN</span>
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
                type="password"
                name="password"
                placeholder="Password"
                value={password}
            onChange={event => setPassword(event.target.value)}
              />
            </div>
    
            <div className="container-login100-form-btn">
              <button className="login100-form-btn" type="submit" onClick={HandleLogin}>Login</button>
            </div>
    
            <div className="loginText">
              Log In With
            </div>
            <div className="social-icons">
              <button>
                <FaFacebook className="social-icon" size={30} onClick={facebook}/>
              </button>
              <button>
                <FaGoogle className="social-icon" size={30} onClick={google} />
              </button>
              <button>
                <FaApple className="social-icon" size={30} />
              </button>
            </div>
    
            <div className="text-center p-t-12">
              <span className="txt1">Forgot </span>
              <a className="txt2" href={"/Reset"} >
                Username / Password?
              </a>
            </div>
    
            <div class="text-center p-t-116">
              <a class="txt2" href="/register">
                Create your Account 
              </a>
            </div>
          </form>
        </div>
      );
    }
    


export default Sign;