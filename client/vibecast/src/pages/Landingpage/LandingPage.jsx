import React from 'react'
import vibeLogo from '/src/assets/vibelogo.svg'; 
import './LandingPage.css';

function Landingpage() {
  return (
   <div className="vibe-container">
    <header className="navbar">
        <div className='logo'>
          {<img src={vibeLogo} alt="Vibecast" className="" />}
         </div>
         <nav>
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
        <button className="connect">Connect to My YouTube Channel</button>
        <button className="demo">Try Live Demo</button>
      </div>
      <p className="login-link">Already have an account? <a href='#'>Log in</a></p>
    </section>

    {/* Creators */}
    <section className="creators">
      <p>Over 4,000 creators use Vibecast daily</p>
      <div className="creator-list">
        <span className="initials">AC </span>
        <span className="initials">MR </span>
        <span className="initials">SR </span>
        <span className="initials">BS </span>
        <span className="initials">SJ </span>
        <span className="creator">+3,994</span>
      </div>
    </section>
   </div>
  )
}

export default Landingpage
