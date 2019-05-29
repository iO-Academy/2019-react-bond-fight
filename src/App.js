import React from 'react';
import './App.css';
import 'normalize.css'
import Header from './Components/Header/Header'
import Card from "./Components/CardContainer/Card/Card";

function App() {
  return (
    <div className="app">
      <Header/>
      <Card/>
    </div>
  );
}

export default App;