import React, { useState } from 'react';
import { ReactComponent as Logo } from '../assets/logo.svg';
import * as CgIcons from 'react-icons/cg';
function Header() {
  const myFunction = () => {
    var x = document.getElementById('myLinks');
    if (x.style.display === 'block') {
      x.style.display = 'none';
    } else {
      x.style.display = 'block';
    }
  };
  return (
    <header>
      <div className="topnav">
        <Logo className="active" />
        <div id="myLinks">
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div>
        <button  onClick={myFunction}>
          <i>
            <CgIcons.CgMenuRight className="icon" />
          </i>
        </button>
      </div>
    </header>
  );
}

export default Header;
