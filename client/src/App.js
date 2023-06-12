import './App.css';
import { useEffect, useState } from 'react';
import Game from "./components/Game.js"
import Signup from "./pages/Signup.js"
function App() {
  return (
    <div id="home">
      <Signup />
    </div>
    /*
    <div id="app">
      <Game />
    </div>
    */
  )
}

export default App;
