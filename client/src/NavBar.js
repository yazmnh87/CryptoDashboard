import React from 'react';
import {Link} from "react-router-dom"

const NavBar = () => {
    function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
      }
      window.onclick = function(e) {
        if (!e.target.matches('.dropbtn')) {
        var myDropdown = document.getElementById("myDropdown");
          if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
          }
        }
      }
    return (
        <div className="navbar">
            <a href="#home">Home</a>
            <a href="#news">News</a>
            <div className="dropdown">
            <button className="dropbtn" onClick={myFunction}>Dropdown
            <i className="fa fa-caret-down"></i>
                </button>
        <div className="dropdown-content" id="myDropdown">
             <a href="#">Light Theme</a>
             <a href="#">Dark Theme</a>
        </div>
        </div> 
        </div>
    );
};

export default NavBar;