import React from "react";
import "./index.css";
import Navbar from "./Navbar"; 
import logo from "./images/logo.svg";
import heroDesktop from "./images/image-hero-desktop.png";
import heroMobile from "./images/image-hero-mobile.png";

function App() {
  return (
    <div className="app">
      <header className="navbar">
        <img src={logo} alt="Snap Logo" className="logo" />
        <nav className="menu">
          <ul>
            <li>Features</li>
            <li>Company</li>
            <li>Careers</li>
            <li>About</li>
          </ul>
        </nav>
        <div className="auth-buttons">
          <button className="login">Login</button>
          <button className="register">Register</button>
        </div>
      </header>

      <main className="hero-section">
        <div className="text-content">
          <h1>Make remote work</h1>
          <p>
            Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.
          </p>
          <button className="cta-button">Learn more</button>
        </div>
        <picture>
          <source srcSet={heroMobile} media="(max-width: 768px)" />
          <img src={heroDesktop} alt="Hero" />
        </picture>
      </main>

      <footer className="clients">
        <img src="./images/client-databiz.svg" alt="Databiz" />
        <img src="./images/client-audiophile.svg" alt="Audiophile" />
        <img src="./images/client-meet.svg" alt="Meet" />
        <img src="./images/client-maker.svg" alt="Maker" />
      </footer>
    </div>
  );
}

export default App;
