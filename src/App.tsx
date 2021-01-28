import React from 'react';
import firebase from './firebase'
import './App.css';

function App() {
  const messaging = firebase.messaging();
  messaging.requestPermission().then(()=>{
    return messaging.getToken()
  }).then((token)=>{
    console.log('token ' , token)
  })
  return (

    <div className="App">
       hey this is ayesha
    </div>
  );
}

export default App;
