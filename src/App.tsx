import React from 'react';
import firebase from './firebase'
import './App.css';
import {Balance} from './components/Balance';
import {Header} from './components/Header';
import {IncomeExpense} from './components/IncomeExpense'
import {History} from './components/History';
import {Newtransaction} from './components/Newtransaction'

function App() {
  const message = firebase.messaging();
  message.requestPermission().then(()=>{
    return message.getToken()
  }).then((token)=>{
    console.log('token ' , token)
  })
  return (

    <div className="App">
      <Header></Header>
      <Balance/>
      <IncomeExpense/>
      <History/>
      <Newtransaction/>
    </div>
  );
}

export default App;
