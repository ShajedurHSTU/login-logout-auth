import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import {auth, provider} from "./firebase.config";
import {signInWithPopup} from "firebase/auth";
import HomePage from './components/HomePage/HomePage';



function App() {


  const [value, setValue]= useState('');
  const handleClick =()=>{
    signInWithPopup(auth,provider).then((data)=>{
      setValue(data.user.email)
      localStorage.setItem("email", data.user.email)
    })
  }


  useEffect(()=>{
    setValue(localStorage.getItem('email'))
  })

  return (
    <div className="App">
     {
      value?<HomePage></HomePage>:
      <button onClick={handleClick}>Sing in With Google</button>
     }
      
    </div>
  );
}

export default App;
