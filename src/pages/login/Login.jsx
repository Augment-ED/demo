import React from 'react'
import "./login.css"
import loginGraphic from '../../assets/loginGraphic.svg';
import google from '../../assets/google.png';
import { useNavigate } from 'react-router-dom';

function Login () {

  let nav = useNavigate();
  const navRegister = () => {
    nav('/register')
  }
  
  return (
    <div className="augmented__login section__padding gradient__bg">
      <div className="augmented__login-graphics">
        <img src={loginGraphic} alt='graphic'/>
      </div>

      <div className="augmented__login-details">
        <h1 className="gradient__text">Login to your account</h1>
        <div className='augmented__login-details__form'>
          <form>
            <label>Email Address</label><br></br>
            <input type='email' id='email'/><br></br>
            <label>Password</label><br></br>
            <input type='password' id='password'/><br></br>
            <a href='/forgotFunction'>Forgot password?</a>
          </form>
        </div>
        <div className="augmented__login-details__button">
          <button type="submit">Login</button>
        </div>
        <div className='augmented__login-extra'>
          <div className='augmented__login-extra__google'>
            <img src={google} alt='google'/>
            <p>Sign in with Google</p>
          </div>
          <div className='or'>
            <p>OR</p>
          </div>
          <div className='augmented__login-extra__create'>
            <p onClick={navRegister}>Create new account</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login