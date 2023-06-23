import React from 'react';
import './member.css'
import linkedin from '../../assets/linkedin.png';

function Member ({ pic, name, title, link }) {
  return (
    <div className="augmented__team-container_member">
      <img src={pic} alt="member_image" />
      <h3>{name}</h3>
      <p>{title}</p>
      <div className="augmented__team-container_linkedin-image">
        <img src={linkedin} alt="linkedin_image" onClick={() => window.open(`${link}`, '_blank')}/>
      </div>
    </div>
  )
}

export default Member