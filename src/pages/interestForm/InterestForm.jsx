import React from 'react'
import "./interestForm.css"
import { Subscription } from '../../components'
import { auth, db} from '../../firebase.js'
import { ref, set } from 'firebase/database';
import { useNavigate } from 'react-router-dom';

function InterestForm () {

    let nav = useNavigate();
    
    const navLogin = (e) => {
        e.preventDefault();
        const form = document.getElementById("interestForm")
        const firstName = form.elements.firstName.value
        const lastName = form.elements.lastName.value
        const emailAddress = auth.currentUser.email
        const accountType = form.elements.accountType.value
        const subscriptionType = form.elements.subscriptionType.value
        if (firstName === "") {
            alert("Please enter first name.")
        }
        else if (lastName === "") {
            alert("Please enter last name.")
        }
        else {
            set(ref(db, 'Augmented Users/' + auth.currentUser.uid), {
                firstName: firstName,
                lastName: lastName,
                accountType: accountType,
                emailAddress: emailAddress,
                subscriptionType: subscriptionType,
            })
            console.log(firstName, lastName, emailAddress, accountType, subscriptionType)
            nav('/dashboard')
        }   
    }

    return (
        <div className='augmented__interestForm section__padding gradient__bg'>
            <div className="augmented__interestForm-subscriptions">
                <Subscription type="Individual" f1="Access to all modules." f2="Access for 1 student & educator." f3="Real-time individual statistics." price="15"/>
                <Subscription type="School" f1="Access to all modules." f2="Access for an entire school." f3="Real-time classroom statistics." price="149"/>
                <Subscription type="District" f1="Access to all modules." f2="Access for all schools in a district." f3="Real-time school statistics." price="349"/>
            </div>

            <div className="augmented__interestForm-details">
                <h1 className="gradient__text">Start your learning journey now</h1>
                <p>Create an account to gain access to our free demo and start learning!</p>
                <div className='augmented__interestForm-details__form'>
                    <form id="interestForm">
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
                        <label>Subscription Type</label><br></br>
                        <select name='subscriptionType' id='subscriptionType'>
                            <option value="individual">Individual</option>
                            <option value="school">School</option>
                            <option value="district">District</option>
                        </select><br></br>
                    </form>
                </div>
                <div className="augmented__interestForm-details__button">
                    <button type="submit" onClick={navLogin}>Register</button>
                </div>
            </div>
        </div>
    )
}

export default InterestForm