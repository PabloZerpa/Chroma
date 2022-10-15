
import Link from "next/link";
import style from '../styles/Navbar.module.css';
import { useState } from 'react';

export default function Navegation(){

    const [click, setClick] = useState(false);
    const navToggle = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    if (typeof window !== "undefined"){
        window.addEventListener('resize', closeMobileMenu);
    }
    
    return(
        <>
            <nav className={style.navbar}>
                <Link href='/' >
                    <a className={style.navbarLogo} onClick={closeMobileMenu}>
                        Chroma
                        <i class='fas fa-palette' />
                    </a>
                </Link>
                <div className={style.menuIcon} onClick={navToggle} >
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>

                <div className={style.navbarContainer}>

                    <ul className={click ? style.navMenuActive : style.navMenu}>
                        <li className={style.navItem}>
                            <Link href='/' >
                                <a className={style.navLinks} onClick={closeMobileMenu}>
                                    <i className="fas fa-home" /> Home
                                </a>
                            </Link>
                        </li>
                        <li className={style.navItem}>
                            <Link href='/explore' >
                                <a className={style.navLinks} onClick={closeMobileMenu}>
                                    <i className="fas fa-compass" /> Explore
                                </a>
                            </Link>
                        </li>
                        <li className={style.navItem}>
                            <Link href='/blog' >
                                <a className={style.navLinks} onClick={closeMobileMenu}>
                                    <i className="fas fa-scroll" /> Blog
                                </a>
                            </Link>
                        </li>
                        <li className={style.navItem}>
                            <Link href='/forums' >
                                <a className={style.navLinks} onClick={closeMobileMenu}>
                                    <i className="fas fa-book" /> Forums
                                </a>
                            </Link>
                        </li>
                        <li className={style.navItem}>
                            <Link href='/about' >
                                <a className={style.navLinks} onClick={closeMobileMenu}>
                                    <i className="fas fa-question-circle" /> About
                                </a>
                            </Link>
                        </li>
                        <li className={style.navItem}>
                            <input
                                className={style.navInput}
                                name='search'
                                type='text'
                                placeholder='🔍Search'
                            />
                        </li>

                        <li className={style.navItem}>
                            <div className={style.navLinks}>
                                <button className={style.navLogin} id="logIn"><a href="#loginModal">LogIn</a></button> 
                            </div>
                        </li >
                        <li className={style.navItem}>
                            <div className={style.navLinks}>
                                <button className={style.navLogin} id="signUp"><a href="#signModal">SignUp</a></button> 
                            </div>
                        </li>
                    </ul>
                </div> 

                <div id="loginModal" className={style.modalmask}>
                    <div className={style.modalbox}>
                        <div className={style.modal}>
                            <div className={style.modalContent}>
                                <div className={style.closeModal}><a href="#">X</a></div>
                                <form className={style.formGroup} id="loginform">
                                    <div className={style.userGroup}>
                                        <i className="fas fa-at" id="userIcon" />
                                        <input
                                            className={style.input} 
                                            type="text" 
                                            placeholder="Email" 
                                            required />
                                    </div>
                                    <div className={style.userGroup}>
                                        <i className="fas fa-key" id="passwordIcon" />
                                        <input
                                            className={style.input}
                                            type="password" 
                                            placeholder="Password" 
                                            required />
                                    </div>
                                    <a id="forgot" href="#">Forgot Password?</a>
                                    <button className={style.btnLogin} >Log In</button>
                                    <p>OR</p>

                                    <div className={style.alterLogin}>
                                        <button type="button" className="btnLogin" style={{color: "rgb(209, 26, 26)"}}><i style={{color: "rgb(209, 26, 26)"}} className="fab fa-google"></i>Google</button>
                                        <button type="button" className="btnLogin" style={{color: "rgb(14, 80, 226)"}}><i style={{color: "rgb(14, 80, 226)"}} className="fab fa-linkedin-in"></i>Linkedin</button>
                                        <button type="button" className="btnLogin" style={{color: "rgb(14, 131, 226)"}}><i style={{color: "rgb(14, 131, 226)"}} className="fab fa-twitter"></i>Facebook</button>
                                        <button type="button" className="btnLogin" style={{color: "rgb(14, 200, 226)"}}><i style={{color: "rgb(14, 200, 226)"}} className="fab fa-facebook-f"></i>Twitter</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="signModal" className={style.modalmask}>
                    <div className={style.modalbox}>
                        <div className={style.modal}>
                            <div className={style.modalContent}>
                                <div className={style.closeModal}><a href="#">X</a></div>

                                <form className={style.formGroup} id="signform">
                                    <div className={style.userGroup}>
                                        <i className="fas fa-user" id="userIcon" />
                                        <input 
                                            className={style.input}
                                            type="text" 
                                            placeholder="Username" 
                                            required />
                                    </div>
                                    <div className={style.userGroup}>
                                        <i className="fas fa-at" id="userIcon" />
                                        <input 
                                            className={style.input}
                                            type="email" 
                                            placeholder="Email" 
                                            required />
                                    </div>
                                    <div className={style.userGroup}>
                                        <i className="fas fa-key" id="passwordIcon" />
                                        <input
                                            className={style.input}
                                            type="password" 
                                            placeholder="Password" 
                                            required />
                                    </div>
                                    <div className={style.userGroup}>
                                        <i className="fas fa-lock" id="userIcon" />
                                        <input 
                                            className={style.input}
                                            type="password" 
                                            placeholder="Reenter Password" 
                                            required />
                                    </div>
                                    <input type="submit" className={style.btnLogin} value="Sign Up" />
                                    <p>OR</p>

                                    <div className={style.alterLogin}>
                                        <button type="button" className="btnLogin" style={{color: "rgb(209, 26, 26)"}}><i style={{color: "rgb(209, 26, 26)"}} className="fab fa-google"></i>Google</button>
                                        <button type="button" className="btnLogin" style={{color: "rgb(14, 80, 226)"}}><i style={{color: "rgb(14, 80, 226)"}} className="fab fa-linkedin-in"></i>Linkedin</button>
                                        <button type="button" className="btnLogin" style={{color: "rgb(14, 131, 226)"}}><i style={{color: "rgb(14, 131, 226)"}} className="fab fa-twitter"></i>Facebook</button>
                                        <button type="button" className="btnLogin" style={{color: "rgb(14, 200, 226)"}}><i style={{color: "rgb(14, 200, 226)"}} className="fab fa-facebook-f"></i>Twitter</button>
                                    </div>
                                </form>
                            </div>   
                        </div>
                    </div>
                </div>

            </nav>
        </>
    )
}