import React from 'react'
import "./register.css"
import { Subscription } from '../../components'
import { auth, db} from '../../firebase.js'
import { ref, set } from 'firebase/database';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

function Register () {

    let nav = useNavigate();

    const navDashboard = (e) => {
        e.preventDefault();
        const form = document.getElementById("registerForm")
        const firstName = form.elements.firstName.value
        const lastName = form.elements.lastName.value
        const accountType = form.elements.accountType.value
        const email = form.elements.email.value
        const password = form.elements.password.value
        const confirmPassword = form.elements.confirmPassword.value
        const subscriptionType = form.elements.subscriptionType.value
        if (firstName === "") {
            alert("Please enter first name.")
        }
        else if (lastName === "") {
            alert("Please enter last name.")
        }
        else {
            if (password === confirmPassword) {
                createUserWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {
                        set(ref(db, 'Augmented Users/' + userCredential.user.uid), {
                            firstName: firstName,
                            lastName: lastName,
                            accountType: accountType,
                            emailAddress: email,
                            subscriptionType: subscriptionType,
                        })
                        console.log(firstName, lastName, accountType, email, password, confirmPassword, subscriptionType)
                        nav('/dashboard')
                })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        if (errorCode === "auth/email-already-in-use") {
                            alert("Email already exists. Please login or choose a different email address.")
                        }
                        else if (errorCode === "auth/weak-password") {
                            alert("Password must be alteast 6 characters.")
                        }
                        else if (errorCode === "auth/missing-password") {
                            alert("Please enter password")
                        }
                        else if (errorCode === "auth/invalid-email") {
                            alert("Invalid email address. Please check and enter again.")
                        }
                        else {
                            alert(error)
                        }
                        console.log(errorCode, errorMessage)
                });
            }
            else {
                alert("Passwords do not match. Please check and enter again.")
            }
        }
    }
    return (
        <div className='augmented__register section__padding gradient__bg'>
            <div className="augmented__register-subscriptions">
                <Subscription type="Individual" f1="Access to all modules." f2="Access for 1 student & educator." f3="Real-time individual statistics." price="15"/>
                <Subscription type="School" f1="Access to all modules." f2="Access for an entire school." f3="Real-time classroom statistics." price="149"/>
                <Subscription type="District" f1="Access to all modules." f2="Access for all schools in a district." f3="Real-time school statistics." price="349"/>
            </div>

            <div className="augmented__register-details">
                <h1 className="gradient__text">Start your learning journey now</h1>
                <p>Create an account to gain access to our free demo and start learning!</p>
                <div className='augmented__register-details__form'>
                    <form id="registerForm">
                        <label>First Name</label><br></br>
                        <input type='text' id="firstName"/><br></br>
                        <label>Last Name</label><br></br>
                        <input type='text' id='lastName'/><br></br>
                        <label>Account Type</label><br></br>
                        <select name='accountType' id='accountType'>
                            <option value="educator">Educator</option>
                            <option value="parent">Parent</option>
                            <option value="student">Student</option>
                        </select><br></br>
                        <label>Email Address</label><br></br>
                        <input type='email' id='email'/><br></br>
                        <p>We'll never share your email with anyone else.</p>
                        <label>Password</label><br></br>
                        <input type='password' id='password'/><br></br>
                        <label>Confirm Password</label><br></br>
                        <input type='password' id='confirmPassword'/><br></br>
                        <label>Subscription Type</label><br></br>
                        <select name='subscriptionType' id='subscriptionType'>
                            <option value="individual">Individual</option>
                            <option value="school">School</option>
                            <option value="district">District</option>
                        </select><br></br>
                    </form>
                </div>
                <div className="augmented__register-details__button">
                    <button type="submit" onClick={navDashboard}>Register</button>
                </div>
            </div>
        </div>
    )
}

export default Register