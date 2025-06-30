import React, { useState } from 'react';
import vibeLogo from '/src/assets/vibelogo.svg';
import Card from '../../components/Card';
import { subscribers } from '../../constants/Users';
import Keyfeatures from '../../components/Keyfeatures';
import Demo from '../../components/Demo';
import Pricing from '../../components/Pricing';
import About from '../../components/About';
import Footer from '../../components/Footer';
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
        <div className='w-28 sm:w-80'>
          <a href='/'><img src={vibeLogo} alt="Vibecast" className="" /></a>
         </div>
         <nav>
          <a href="/">Home</a>
          <a href="#features">Features</a>
          <a href="#demo">Demo</a>
          <a href="#pricing">Pricing</a>
          <a href="#about">About</a>
         <button className="sign-in hover:scale-105">Sign-in</button>
         <button className="get-started hover:scale-105">Get Started</button>
        </nav>
    </header>

    {/* Hero Section */}
    <section className="hero">
      <h1>Wanna Hear the vibe of your <br /> Youtube tribe?</h1>
      <p>Understand your audience with AI-powered comment <br /> insights from Youtube.</p>
      <div className="buttons">
        <button className="connect hover:scale-105" onClick={handleOAuth} disabled={loading || connected}>
        {loading ? 'Connecting...' : connected ? 'Connected!' : 'Connect to My YouTube Channel'}
      </button>
        <button className="demobtn hover:scale-105">Try Live Demo</button>
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
    <section id='demo' className='howitworks pt-30'>
        <h1 className='font-[800]'>How it Works</h1>
        <p>Vibe cast makes it easy to understand your audience across <br /> all platforms.</p>
        
    </section>
    <Card />
    <Keyfeatures />
    <Demo />
    <Pricing />
    <About />
        <div className='flex justify-center flex-col items-center pt-12 mt-30 pb-30'>
          <p className='text-[50px] font-[800]'>Ready to understand your audience better?</p>
          <p className='text-[32px] text-[#6B6B6B] font-[500]'>Join thousands of creators who use Vibecast to grow their channels smarter.</p>

          <button className="bg-[#632DD9] w-[400px] h-[50px] text-[#F5F5F5] rounded-[8px] mt-14 text-[20px] shadow-xl hover:scale-105" onClick={handleOAuth} disabled={loading || connected}>
            {loading ? 'Connecting...' : connected ? 'Connected!' : 'Connect to My YouTube Channel'}
          </button>
        </div>
        <Footer />
   </div>
  )
}

export default Landingpage
