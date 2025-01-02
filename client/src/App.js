import React from "react";
import Navbar from "./component/navbar/Navbar";
import {BrowserRouter, Routes , Route} from 'react-router-dom';
import Home from "./pages/Home";
import LoginSignup from "./pages/LoginSignup";
import Guide from "./pages/Guide";
import Tournament from "./pages/Tournament";
import Chat from "./pages/Chat";
import Profile from './pages/Profile';
import Participate from "./component/partitcipate/Participate";
import ParticipateTour from "./pages/ParticipateTour";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/loginSignup" element={<LoginSignup />} />
          <Route path="/tournament" element={<Tournament />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/participate/:id" element={<ParticipateTour/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
