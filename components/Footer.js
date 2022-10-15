
import style from '../styles/Footer.module.css';
import Link from "next/link";

function Footer() {
  return (
    <div className={style.footerContainer}>
    
      <div className={style.footerLinks}>
        <div className={style.footerLinkWrapper}>
          <div className={style.footerLinkItems}>
            <h2>About Us</h2>
            <Link href='/sign-up'>How it works</Link>
            <Link href='/'>Testimonials</Link>
            <Link href='/'>Careers</Link>
            <Link href='/'>Terms of Service</Link>
          </div>
          <div className={style.footerLinkItems}>
            <h2>Contact Us</h2>
            <Link href='/'>Contact</Link>
            <Link href='/'>Support</Link>
            <Link href='/'>Sponsorships</Link>
          </div>
          <div className={style.footerLinkItems}>
            <h2>Social Media</h2>
            <Link href='/'>Instagram</Link>
            <Link href='/'>Facebook</Link>
            <Link href='/'>Youtube</Link>
            <Link href='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section className={style.socialMedia}>
        <div className={style.socialMediaWrap}>
          <div className={style.footerLogo}>
            <Link href='/'>
                <a className={style.socialLogo}>
                    Chroma
                    <i class='fas fa-palette' />
                </a>
            </Link>
          </div>
          <small className={style.websiteRights}>Chroma © 2020</small>
          <div className={style.socialIcons}>
            <Link href='/' >
                <a target='_blank' aria-label='Facebook' className={style.socialIconLink}> 
                    <i class='fab fa-facebook-f' />
                </a>
            </Link>
            <Link href='/' >
                <a target='_blank' aria-label='Instagram' className={style.socialIconLink}>
                    <i class='fab fa-instagram' />
                </a>
            </Link>
            <Link href='/' >
                <a className={style.socialIconLink} target='_blank' aria-label='Youtube'>
                    <i class='fab fa-youtube' />
                </a>
            </Link>
            <Link href='/' >
                <a className={style.socialIconLink} target='_blank' aria-label='Twitter'>
                    <i class='fab fa-twitter' />
                </a>
            </Link>
            <Link href='/' >
                <a className={style.socialIconLink} target='_blank' aria-label='LinkedIn'>
                    <i class='fab fa-linkedin' />
                </a>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;