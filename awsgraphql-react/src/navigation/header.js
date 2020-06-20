import React from "react";
import { Mutation } from "react-apollo";
import { createSkill } from "../graphql/mutations";
import gql from "graphql-tag";
import image from "../images/arrows.png"
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
              <li><a href="/skills">Home</a></li>
              <li><a href="/skills">Skills</a></li>
              <li><a href="/skills">Employees</a></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;