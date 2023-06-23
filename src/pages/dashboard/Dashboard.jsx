import React from 'react';
import './dashboard.css'
import { Topic } from '../../components';
import cell from '../../assets/cell.png';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';

function Dashboard () {

  let nav = useNavigate()

  const navLogin = () => {
    auth.signOut();
    nav('/login', { replace: true });
  }

  return (
    <div className='augmented__dashboard-container section__padding gradient__bg'>
        <h1 className='gradient__text'>Welcome to AugmentED!</h1>
        <button onClick={navLogin}>Logout</button>
        <div className='augmented__dashboard-subjects'>
          <h2>Biology</h2>
          <div className='augmented__dashboard-subjects__topics'>
            <Topic image={cell} title="Plant Cell" link="https://augmentedcornell.github.io/UnityWebApp/"/>
          </div>
        </div>
    </div>
  )
}

export default Dashboard