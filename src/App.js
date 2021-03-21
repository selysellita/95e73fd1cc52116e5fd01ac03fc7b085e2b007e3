import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/home'
import './App.css';
import Header from './components/Header';
import Calendar from './components/Calendar';
import Card from './components/Card';


function App() {
  return (
    <div >
      <Header/>
      <Calendar/>
      <Card/>
      <div style={{position:'sticky', bottom:'24px', height:'150px', width:'100%', background:'red'}}>
          TESTESTES
      </div>
      
      

    </div>
  );
}

export default App;
