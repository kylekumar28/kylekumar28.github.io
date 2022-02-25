import React from 'react';

import '../styles/footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__bg'>
        <div className='footer__container container grid'>
          {/* Footer title */}
          <div>
            <h1 className='footer__title'>Kyle Kumar</h1>
            <span className='footer_subtitle'>
              Student, developer and designer
            </span>
          </div>

          {/* Footer links */}
          <ul className='footer__links'>
            <li>
              <a href='#services' className='footer__link'>
                Services
              </a>
            </li>
            <li>
              <a href='#portfolio' className='footer__link'>
                Portfolio
              </a>
            </li>
            <li>
              <a href='#contact' className='footer__link'>
                Contact Me
              </a>
            </li>
          </ul>

          {/* Footer socials */}
          <div className='footer__socials'>
            <a href='#' className='footer__social'>
              <i className='uil uil-facebook-f'></i>
            </a>
            <a href='#' className='footer__social'>
              <i className='uil uil-instagram'></i>
            </a>
            <a href='#' className='footer__social'>
              <i className='uil uil-twitter-alt'></i>
            </a>
          </div>
        </div>

        <p className='footer__copy'>&#169; Kyle Kumar. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
