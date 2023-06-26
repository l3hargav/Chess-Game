import Game from "./components/Game.js"
import Signup from "./pages/Signup.js"
import Main from "./pages/Main.js"
import Login from "./pages/Login.js"
import Home from "./pages/Home.js"
import { socket, SocketContext } from "./socket.js";

import { Routes, Route } from "react-router-dom"
function App() {
  return (
    <SocketContext.Provider value={socket}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user/:id" element={<Home />} /> 
        <Route path="/game/:id" element={<Game />} />
      </Routes>
    </SocketContext.Provider>
    /*    
    <div id="app">
      <Game />
    </div>
    */
  )
}

export default App;
