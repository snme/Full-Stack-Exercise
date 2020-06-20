import React from "react";
import { Mutation } from "react-apollo";
import { createSkill } from "./graphql/mutations";
import gql from "graphql-tag";
import Modal from './Modal';
import Sidenav from './Sidenav';
import image from "./images/arrows.png"
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
          <div className="nav-wrapper">
            <a href="#" className="brand-logo center"> <img src={image} height="60px" /> </a>
            <ul id="nav-mobile" className="left hide-on-med-and-down">
              <li><a href="sass.html">Sass</a></li>
              <li><a href="badges.html">Components</a></li>
              <li><a href="collapsible.html">JavaScript</a></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;