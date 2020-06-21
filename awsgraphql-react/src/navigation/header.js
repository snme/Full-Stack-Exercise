import React from "react";
import { Mutation } from "react-apollo";
import { createSkill } from "../graphql/mutations";
import gql from "graphql-tag";
import image from "../images/arrows.png"
import { Link } from 'react-router-dom'
/*

    <div class="col s1">
      <Modal />
      </div>
*/
class Header extends React.Component {
  render() {
    return (

      <div className="row">
        <nav>
          <div className="nav-wrapper blue">
            <a href="#" className="brand-logo center"> <img src={image} height="60px" /> </a>
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