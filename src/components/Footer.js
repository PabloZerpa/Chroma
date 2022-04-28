import React from 'react';
import style from './css/Footer.module.css'; 
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className={style.footerContainer}>
    
      <div className={style.footerLinks}>
        <div className={style.footerLinkWrapper}>
          <div className={style.footerLinkItems}>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div className={style.footerLinkItems}>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className={style.footerLinkWrapper}>
          <div className={style.footerLinkItems}>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section className={style.socialMedia}>
        <div className={style.socialMediaWrap}>
          <div className={style.footerLogo}>
            <Link to='/' className={style.socialLogo}>
              Chroma
              <i class='fas fa-palette' />
            </Link>
          </div>
          <small className={style.websiteRights}>Chroma © 2020</small>
          <div className={style.socialIcons}>
            <Link
              className={style.socialIconLink}
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              className={style.socialIconLink}
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              className={style.socialIconLink}
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              className={style.socialIconLink}
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              className={style.socialIconLink}
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;