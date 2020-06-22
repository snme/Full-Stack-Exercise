import React from "react";
import image from "../images/arrows.png";
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (

      <div className="row">
        <nav>
          <div className="nav-wrapper blue">
            <a href="/" className="brand-logo center"> <img src={image} alt="logo" height="60px" /> </a>
            <ul id="nav-mobile" className="left hide-on-med-and-down">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/skills">Skills</Link></li>
              <li><Link to="/employees">Employees</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;