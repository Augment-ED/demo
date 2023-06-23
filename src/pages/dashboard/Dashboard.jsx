import React from 'react';
import './dashboard.css'
import { Topic } from '../../components';
import cell from '../../assets/cell.png';

function Dashboard () {
  return (
    <div className='augmented__dashboard-container section__padding gradient__bg'>
        <h1 className='gradient__text'>Welcome, Shreyash Gupta!</h1>
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