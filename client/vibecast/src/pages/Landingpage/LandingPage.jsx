import React from 'react'
import vibeLogo from '/src/assets/vibelogo.svg';
import Card from '../../components/Card';
import Signin from '../../components/Signin';
import './LandingPage.css';


const users = [
  { initials: 'AC', name: 'Alex Chen', bgColor: '#ffe0e0', textColor: '#d00000' },
  { initials: 'MR', name: 'Maria Rodriguez', bgColor: '#d5f8f3', textColor: '#4a7671' },
  { initials: 'SR', name: 'Salami Rasheed', bgColor: '#ffd2f5', textColor: '#e00094' },
  { initials: 'BS', name: 'Bob Smith', bgColor: '#fff5cd', textColor: '#f1b600' },
  { initials: 'SJ', name: 'Sarah Johnson', bgColor: '#e5dbff', textColor: '#6f42c1' },
];



function Landingpage() {
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
        <button className="connect">Connect to My YouTube Channel</button>
        <button className="demo">Try Live Demo</button>
      </div>
      <p className="login-link">Already have an account? <a href='#'>Log in</a></p>
    </section>
    {/* <Signin /> */}
    {/* Creators */}
    <section className="creators">
      <p>Over 4,000 creators use Vibecast daily</p>
      <div className="user-list">
        {users.map((user, index) => (
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
        <h1>How it Works</h1>
        <p>Vibe cast makes it easy to understand your audience across <br /> all platforms.</p>
    </section>
    <Card />
   </div>
  )
}

export default Landingpage
