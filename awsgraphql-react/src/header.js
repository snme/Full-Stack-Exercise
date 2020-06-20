import React from "react";
import { Mutation } from "react-apollo";
import { createSkill } from "./graphql/mutations";
import gql from "graphql-tag";

function myFunction() {
  console.log(document.getElementById("myDropdown"));
    document.getElementById("myDropdown").style.display = 'block';
    console.log("func");
  }

  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

class Header extends React.Component {
  render() {
    return (

      <div className="row">
      <div className="dropdown">
  <button onClick={myFunction} className="dropbtn">Dropdown</button>
  <div id="myDropdown" class="dropdown-content" display="block">
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#contact">Contact</a>
  </div>
</div>
            <nav>
    <div className="nav-wrapper">
      <a href="index.html" className="brand-logo center">Logo</a>
      <ul id="nav-mobile" class="left hide-on-med-and-down">
        <li><a href="sass.html">Edit Employees </a></li>
        <li><a href="badges.html">Edit Employees</a></li>
        <li><a href="collapsible.html">Edit Skills</a></li>
      </ul>
    </div>
  </nav>
      </div> 
    );
  }
}

export default Header;