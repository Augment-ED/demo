import React from 'react'
import './footer.css'
import logo from '../../logo.svg';
import { linkedin, github, twitter, instagram} from './imports';

function Footer () {
  return (
    <div className="augmented__footer section__padding">
      <div className="augmented__footer-copyright">
        <p>@2023 AugmentED. All rights reserved.</p>
      </div>
      <div className="augmented__footer-social">
          <img src={linkedin} alt='linkedin' />
          <img src={github} alt='github' />
          <img src={twitter} alt='twitter' />
          <img src={instagram} alt='instagram' />
      </div>
      <div className="augmented__footer-logo">
        <img src={logo} alt='logo' />
      </div>
    </div>
  )
}

export default Footer