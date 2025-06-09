import React, { useState } from 'react';
import { Eye } from 'lucide-react';
import googleLogo from '../assets/google-logo.png';
import vibcastLogo from '../assets/vibecast.svg'; 
import './Signin.css'

function Signin() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="vibecast-container">
                <div className="login-header">
                    <div className="brand">
                        <div>
                            {<img src={vibcastLogo} alt="Vibecast" className="brand-logo" />}
                        </div>
                        <div className="brand-name">Vibecast</div>
                    </div>
                    <div className="faq-link">FAQ</div>
                </div>
            <h2 className="welcome-text">Welcome back, Creator</h2>
                <p className="sign-in-text">Sign in to access your insights</p>

            <div className="login-card">
                <form className="login-form" onSubmit={e => e.preventDefault()}>
                    <div className="form-group">
                        <label htmlFor="email">Email or Username</label>
                        <input
                            type="text"
                            id="email"
                            placeholder="you@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className="form-group password-group">
                        <div className="password-label-container">
                            <label htmlFor="password">Password</label>
                            <a href="#" className="forgot-password">Forgot Password?</a>
                        </div>
                        <div className="password-input-container">
                            <input
                                type={showPassword ? "text" : "password"}
                                className='password-hold'
                                id="password"
                                placeholder="••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} />
                            <button
                                type="button"
                                className="show-password-button"
                                onClick={togglePasswordVisibility}
                                aria-label={showPassword ? "Hide password" : "Show password"}
                            >
                                <Eye size={20} color="#888" />
                            </button>
                        </div>
                    </div>

                    <button type="submit" className="sign-in-button">
                        Sign in to Vibecast
                    </button>

                    <div className="divider">
                        <span>Or</span>
                    </div>

                    <button type="button" className="google-sign-in">
                        {<img src={googleLogo} alt="Google" className="google-logo" />}
                        Sign in with Google
                    </button>

                    
                </form>
                
            </div>
            <div className="no-account">
                        No account? <a href="#" className="join-link">Join Vibcast</a>
                    </div>

                <div className="insights-ready">
                    Our AI has your insights ready
                    <span className="chart-icon">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="1" y="8" width="3" height="7" fill="#4285F4" />
                            <rect x="6" y="4" width="3" height="11" fill="#0F9D58" />
                            <rect x="11" y="1" width="3" height="14" fill="#F4B400" />
                        </svg>
                    </span>
                </div>

                <div className="trust-indicators">
                    <div className="data-safe">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 1L2 3V7.5C2 11.09 4.42 14.5 8 15C11.58 14.5 14 11.09 14 7.5V3L8 1Z" stroke="#888" strokeWidth="1.5" />
                            <path d="M5.5 8L7 9.5L10.5 6" stroke="#888" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Your data is safe with us
                    </div>
                    <div className="trusted-by">
                        Trusted by 4,000+ creators
                    </div>
                </div>
        </div>
    );
}

export default Signin;