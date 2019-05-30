import React from 'react'
import './App.css'
import Header from './Components/Header/Header'
import CardContainer from "./Components/CardContainer/CardContainer"
import 'normalize.css'

function App() {
  return (
    <div className="app">
      <Header/>
      <CardContainer/>
    </div>
  );
}

export default App;