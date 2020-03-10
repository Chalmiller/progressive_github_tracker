import React from 'react';
import logo from '../logo.svg';
import './App.css';
import Profile from './Profile';
import Header from '../components/Header/Header';


function App() {
  return (
    <div className="App">
      <Header logo={logo}/>
      <Profile />
    </div>
  );
}

export default App;
