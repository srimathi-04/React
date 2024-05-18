import React from "react";
import "./Ideas.css";
import {Link} from 'react-router-dom';

function Ideas() {

  return (
    <><div className="container">
      <header className="header">
        <h1 className="logoname">VR Vanguard</h1>
        <nav className="menu">
          <ul style={{ display: "flex", justifyContent: "flex-end", margin: "10px", marginRight: "12px" }}>
            <li>
              <Link to="/Ideas"
              >Get Ideas </Link>
            </li>
            <li>
            <Link to="/Fileupload"
              >Upload Files </Link>
            </li>
            <li>
              <Link to="/About"
              >About </Link>
            </li>
            <li>
            <Link to="/Contact"
              >Contact </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="main">
        <h2 className="bph">Get inspired</h2>
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
        <Link to='/Fileupload'>Have Your own customised plan?</Link>
        </div>
      </main>
    </div><footer className='footer'>
        <div className='contact'>
          <h1>Contact Us</h1>
          <a href="https://wa.me/+919789697906" target='_blank'>+91 97896 97906  </a><br></br>
          <a href="mailto:bsaravanan933@gmail.com" class="btn hire-btn" target='_blank'>
            virtualbuilders123@gmail.com
          </a>
          <p>Copyrights 2024. All Rights Reserved.</p>


        </div>
      </footer></>
  );
};



export default Ideas;