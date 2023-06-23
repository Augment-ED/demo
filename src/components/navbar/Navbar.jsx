import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../logo.svg';
import './navbar.css'
import { useNavigate } from 'react-router-dom';

function Navbar () {
  const [toggleMenu, setToggleMenu] = useState(false);

  let nav = useNavigate();
  const goHome = () => {
    nav("/", { replace: true})
  }

  const navLogin = () => {
    nav("/login", { replace: true})
  }
  return (
    <div className="augmented__navbar gradient__bg">
      <div className="augmented__navbar-links">
        <div className="augmented__navbar-links_logo">
          <img src={logo} alt='logo' onClick={goHome}/>
        </div>
        <div className="augmented__navbar-links_container">
          <p><a href="#features">Features</a></p>
          <p><a href="#motivation">Motivation</a></p>
          <p><a href="#team">Team</a></p>
        </div>
      </div>
      <div className="augmented__navbar-sign">
        <button type="button" onClick={navLogin}>Try Free Demo</button>
      </div>
      <div className="augmented__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#000" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="000" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="augmented__navbar-menu_container scale-up-center">
          <div className="augmented__navbar-menu_container-links">
            <p><a href="#features">Features</a></p>
            <p><a href="#motivation">Motivation</a></p>
            <p><a href="#team">Team</a></p>
          </div>
          <div className="augmented__navbar-menu_container-links-sign">
            <button type="button" onClick={navLogin}>Try Free Demo</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
}

export default Navbar