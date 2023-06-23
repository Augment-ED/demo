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
          <img src={linkedin} alt='linkedin' onClick={() => window.open("https://www.linkedin.com/company/augmented23/", "_blank")}/>
          <img src={github} alt='github' onClick={() => window.open("https://github.com/Augment-ED", "_blank")}/>
          <img src={twitter} alt='twitter' onClick={() => window.open("https://twitter.com/augmented_23", "_blank")}/>
          <img src={instagram} alt='instagram' onClick={() => window.open("https://www.instagram.com/augmented_23", "_blank")} />
      </div>
      <div className="augmented__footer-logo">
        <img src={logo} alt='logo' />
      </div>
    </div>
  )
}

export default Footer