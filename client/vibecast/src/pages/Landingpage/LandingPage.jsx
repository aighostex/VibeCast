import React, { useState } from 'react';
import vibeLogo from '/src/assets/vibelogo.svg';
import Card from '../../components/Card';
import { subscribers } from '../../constants/Users';
import Keyfeatures from '../../components/Keyfeatures';
import Demo from '../../components/Demo';
import Pricing from '../../components/Pricing';

import Signin from '../../components/Signin';
import './LandingPage.css';








function Landingpage() {
  
  // youtube Authentication
const [loading, setLoading] = useState(false);
const [connected, setConnected] = useState(false);

const handleOAuth = () => {
  setLoading(true);
  setTimeout(() => {
    setLoading(false);
    setConnected(false);
  }, 2000);
};



  return (
   <div className="vibe-container">
    <header className="navbar">
        <div className='logo'>
          <a href='/'><img src={vibeLogo} alt="Vibecast" className="" /></a>
         </div>
         <nav>
          <a href="/">Home</a>
          <a href="http://">Features</a>
          <a href="http://">Demo</a>
          <a href="http://">Pricing</a>
          <a href="http://">About</a>
         <button className="sign-in">Sign-in</button>
         <button className="get-started">Get Started</button>
        </nav>
    </header>

    {/* Hero Section */}
    <section className="hero">
      <h1>Wanna Hear the vibe of your <br /> Youtube tribe?</h1>
      <p>Understand your audience with AI-powered comment <br /> insights from Youtube.</p>
      <div className="buttons">
        {/* <button className="connect">Connect to My YouTube Channel</button> */}
        <button className="connect" onClick={handleOAuth} disabled={loading || connected}>
        {loading ? 'Connecting...' : connected ? 'Connected!' : 'Connect to My YouTube Channel'}
      </button>
        {/* <Youtubeauth /> */}
        <button className="demobtn">Try Live Demo</button>
      </div>
      <p className="login-link">Already have an account? <a href='#'>Log in</a></p>
    </section>

    {/* Creators */}
    <section className="creators">
      <p>Over 4,000 creators use Vibecast daily</p>
      <div className="user-list">
        {subscribers.map((user, index) => (
          <div key={index} className="user">
            <div
              className="avatar"
              style={{ backgroundColor: user.bgColor, color: user.textColor }}
            >
              {user.initials}
            </div>
            <p className="user-name">{user.name}</p>
          </div>
        ))}
        <div className="more">
          <div className="more-badge">+3,994</div>
        </div>
      </div>
    </section>

    {/* How it works */}
    <section className='howitworks'>
        <h1 className='font-[800]'>How it Works</h1>
        <p>Vibe cast makes it easy to understand your audience across <br /> all platforms.</p>
    </section>
    {/* usage stepsxc */}
    <Card />
    <Keyfeatures />
    <Demo />
    <Pricing />
   </div>
  )
}

export default Landingpage
