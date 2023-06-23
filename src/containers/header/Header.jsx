import React from 'react'
import './header.css'
import graphic from '../../assets/graphic.svg';
import { useNavigate } from 'react-router-dom';

function Header () {

  let nav = useNavigate();
  const navLogin = () => {
    nav("/login", { replace: true})
  }
  return (
    <div className="augmented__header section__padding" id="home">
      <div className="augmented__header-content">
        <h1 className="gradient__text">Experience learning in a new dimension!</h1>
        <p>AugmentED is revolutionary EdTech platform that harnesses the power of 3D visualization technology to bring learning to life and empower teachers to help students reach their full potential.</p>

        <div className="augmented__header-content__cta">
          <button type="button" onClick={navLogin}>Get Started</button>
        </div>
      </div>

      <div className="augmented__header-image">
        <img src={graphic} alt='graphic'/>
      </div>
    </div>
  )
}

export default Header