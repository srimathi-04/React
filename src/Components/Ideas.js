import React from "react";
import "./Ideas.css";
import { Link } from "react-router-dom";

function Ideas() {
  return (
    <div className="container">
      <header className="header">
        <h1 className="logoname">VR Vanguard</h1>
        <nav className="menu">
          <ul style={{ display: "inline-flex", justifyContent: "center", margin: "10px", marginRight: "12px", textDecoration: "none" }}>
            <li>
              <Link to="/Ideas" className="abt">Get Ideas</Link>
            </li>
            <li>
              <Link to="/FileUpload" className="abt">Upload Files</Link>
            </li>
            <li>
              <Link to="/About" className="abt">About</Link>
            </li>
            <li>
              <Link to="/Contact" className="abt">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
      <section id="about" className="about-content">
        <div className="Content">
          <p>
            At VANGUARD 3D Home Builders, we revolutionize the way homes are built by leveraging cutting-edge 3D printing technology. Our mission is to create sustainable, high-quality homes faster and more affordably than traditional construction methods. With a commitment to innovation and customer satisfaction, we turn your dream home into reality with precision and care.
          </p>
        </div>
        <div className="video-content">
          <video width="100%" style={{ maxWidth: "500px" }} height="450" autoPlay muted playsInline loop>
            <source src="main-page-hero-tablet.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      <section id="buttons" className="container">
        <h2>ABOUT</h2>
        <div className="button-group">
          <div className="button-item">
            <button>EXPLORE GIVEN IDEAS</button>
            <p>Get inspired by innovative 3D-printed home designs, sustainable building practices, and cutting-edge architectural trends shaping the future of home construction.</p>
          </div>
          <div className="button-item">
            <button>EXPLORE MORE IDEAS</button>
            <p>Discover creative architectural solutions, modern construction techniques, and the latest trends in sustainable housing.</p>
          </div>
          <div className="button-item">
            <button>LEARN ABOUT TRENDS</button>
            <p>Stay updated with the newest advancements in 3D-printed homes, eco-friendly materials, and futuristic design concepts.</p>
          </div>
        </div>
      </section>
      <main className="main">
        <h2 className="bph">Get Ideas</h2>
        <p className="bpn">Showcase of most creative interior design projects & home decor ideas</p>
        <div className="blueprints">
          <img
            src="https://arbulider.netlify.app/img/portfolio/11.jpg"
            alt="Blueprint 1" />
          <img
            src="https://arbulider.netlify.app/img/portfolio/08.jpeg"
            alt="Blueprint 2" />
        </div>
        <div className="button-row">
          <div className="buttons">
            <button>MODEL</button>
            <button>COST ESTIMATION</button>
          </div>
          <div className="buttons1">
            <button>MODEL</button>
            <button>COST ESTIMATION</button>
          </div>
        </div>
        <div>
          <Link to="/FileUpload">Have your own customised plan?</Link>
        </div>
      </main>
      <footer className='footer'>
        <div className='contact'>
          <h1>Contact Us</h1>
          <a href="https://wa.me/+919789697906" target='_blank' rel="noopener noreferrer">+91 97896 97906</a><br />
          <a href="mailto:virtualbuilders123@gmail.com" className="btn hire-btn" target='_blank' rel="noopener noreferrer">
            virtualbuilders123@gmail.com
          </a>
          
        </div>
      </footer>
    </div>
  );
}

export default Ideas;
