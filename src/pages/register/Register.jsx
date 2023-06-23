import React from 'react'
import "./register.css"
import { Subscription } from '../../components'

function Register () {
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
                <form>
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
                <button type="submit">Register</button>
            </div>
        </div>
    </div>
  )
}

export default Register