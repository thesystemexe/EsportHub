import React from "react";
import '../pages/css/Home.css';
import nui_image from '../component/assets/nui.webp'
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <div className="left-container">
        <div className="left-home-text">
          <h1>Welcome to home</h1>
          <p> A place play and earn</p>
        </div>
        <div className="left-home-button">
          <button>
            <Link to='/tournament' style={{textDecoration:'none', color:'white'}}>Tournament</Link>
          </button>
          <button>Login</button>
        </div>
      </div>
      <div className="right-container">
        <img src={nui_image} alt="" />
      </div>
    </div>
  );
};

export default Home;
