import React from 'react'
import "./login.css"
import loginGraphic from '../../assets/loginGraphic.svg';
import google from '../../assets/google.png';
import { useNavigate } from 'react-router-dom';
import { auth, provider } from "../../firebase";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail } from "firebase/auth";

function Login () {

  let nav = useNavigate();
  const navRegister = () => {
    nav('/register', { replace: true })
  }

  const forgotPass = (e) => {
    e.preventDefault();
    const form = document.getElementById('loginForm')
    const email = form.elements.email.value
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Password reset email has been sent. Please check your email.")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === "auth/user-not-found") {
          alert("Account not found.")
        }
        if (errorCode === "auth/invalid-email") {
          alert("Invalid email address. Please check and submit again.")
        }
        if (errorCode === "auth/missing-email") {
          alert("Please enter email address.")
        }
        console.log(errorCode, errorMessage)
      });
  }

  const navDashboard = (e) => {
    e.preventDefault();
    const form = document.getElementById("loginForm")
    const email = form.elements.email.value
    const password = form.elements.password.value

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential.user)
        nav('/dashboard', { replace: true })
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        if (errorCode === "auth/invalid-email") {
          alert("Invalid email address. Please check and enter again.")
        }
        else if (errorCode === "auth/user-not-found") {
          alert("Email address not registered. Please create a new account before proceeding.")
        }
        else if (errorCode === "auth/missing-password") {
          alert("Please enter password")
        }
        else if (errorCode === "auth/wrong-password") {
          alert("Incorrect password. Please check and try again.")
        }
        console.log(errorCode, errorMessage)
      });
  }

  const navInterestForm = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log(token, user)
        nav('/interestForm', { replace: true })
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorCode, errorMessage, email, credential)
      })
  }

  return (
    <div className="augmented__login section__padding gradient__bg">
      <div className="augmented__login-graphics">
        <img src={loginGraphic} alt='graphic'/>
      </div>

      <div className="augmented__login-details">
        <h1 className="gradient__text">Login to your account</h1>
        <div className='augmented__login-details__form'>
          <form id="loginForm">
            <label>Email Address</label><br></br>
            <input type='email' id='email'/><br></br>
            <label>Password</label><br></br>
            <input type='password' id='password'/><br></br>
            <button onClick={forgotPass}>Forgot password?</button>
          </form>
        </div>
        <div className="augmented__login-details__button">
          <button type="submit" onClick={navDashboard}>Login</button>
        </div>
        <div className='augmented__login-extra'>
          <div className='augmented__login-extra__google' onClick={navInterestForm}>
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