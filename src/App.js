import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import {auth,provider} from './firebase.config';
import {signInWithPopup} from 'firebase/auth';


function App() {

  const [value, setValue]= useState({
    isSignedIn: false,
    name:'',
    email:'',
    photo:'',

  })
  const handleClick=()=>{
    signInWithPopup(auth,provider).then((result)=>{
      console.log(result.user);
     const {displayName,email,photoURL}=result.user;
     console.log(displayName, email, photoURL);
     const SignedIn={
      isSignedIn:true,
      name: displayName,
      email: email,
      photo:photoURL,
     }
     setValue(SignedIn)
    })
  }
  return (
    <div className="App">
      <button onClick={handleClick}>Sign In with Google</button>
      <h1>{value.name}</h1>
      <h2>{value.email}</h2>
      <img src={value.photo}></img>
    </div>
  );
}

export default App;
