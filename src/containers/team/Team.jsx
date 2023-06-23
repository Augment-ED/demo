import React from 'react'
import { Member } from '../../components';
import './team.css'
import { Avi, Josiah, Parthit, Shreyash, Yuzhen } from './imports';

function Team () {
  return (
    <div className="augmented__team section__padding" id="team">
    <div className="augmented__team-heading">
      <h1 className="gradient__text">Meet the Team</h1>
    </div>
    <div className="augmented__team-container">
        <Member pic={Avi} name="Avichal Gupta" title="COO" link="https://www.linkedin.com/in/avichalg" />
        <Member pic={Josiah} name="Josiah Johnson" title="CEO" link="https://www.linkedin.com/in/josiah-d-johnson/" />
        <Member pic={Parthit} name="Parthit Patel" title="COE" link="https://www.linkedin.com/in/parthit/" />
        <Member pic={Shreyash} name="Shreyash Gupta" title="CPO" link="https://www.linkedin.com/in/shreyashkgupta/" />
        <Member pic={Yuzhen} name="Yuzhen Zhang" title="CTO" link="https://www.linkedin.com/in/adam-yuzhen-zhang-08323b1bb/" />
    </div>
  </div>
  )
}

export default Team