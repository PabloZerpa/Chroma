
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import style from './css/Navbar.module.css';
import {auth} from "../firebaseConfig";

function Navbar() {

    const [click, setClick] = useState(false);
    const navToggle = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    window.addEventListener('resize', closeMobileMenu);

    const googleBtn = useRef(null);
    const onButtonClick = () => 
    {   console.log(googleBtn.current.style.color);
        googleBtn.current.style.color = "green";
    };

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [pass, setPass] = useState("");
    const [repass, setRePass] = useState("");

    const registerUser = (e) =>
    {   console.log("REGISTER");
        e.preventDefault();
        if(email != null && name != null && pass != null && repass != null)
        {
            if(pass === repass)
            {
                try
                {
                    auth.createUserWithEmailAndPassword(email,pass)
                    .then( console.log("Usuario registrado") )
                    resetForm();
                }
                catch(e)
                {
                    if(e.code == "auth/invalid-email"){
                        console.log("Incorrect email");
                    }
                    if(e.code == "auth/weak-password"){
                        console.log("Weak password");
                    }
                }
            }
        }
    }

    const loginUser = (e) =>
    {   console.log("LOGIN");
        e.preventDefault();

        if(email != null && pass != null)
        {
            auth.signInWithEmailAndPassword(email, pass)
            .then((r) => console.log(r))
            .catch((err) => { if(err.code == "auth/wrong-password"){ console.log("password Incorrecta") } })
            resetForm();
        }
    }

    const resetForm = () =>
    {
        document.getElementById("loginform").reset();
        //document.getElementById("signform").reset();
    }

    return (
        <>
            <nav className={style.navbar}>
                <Link to='/' className={style.navbarLogo} onClick={closeMobileMenu}>
                        Chroma
                    <i class='fas fa-palette' />
                </Link>
                <div className={style.menuIcon} onClick={navToggle} >
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>

                <div className={style.navbarContainer}>

                    <ul className={click ? style.navMenuActive : style.navMenu}>
                        <li className={style.navItem}>
                            <Link to='/' className={style.navLinks} onClick={closeMobileMenu}>
                                <i className="fas fa-home" /> Home
                            </Link>
                        </li>
                        <li className={style.navItem}>
                            <Link
                                to='/explore'
                                className={style.navLinks}
                                onClick={closeMobileMenu}
                            >
                                <i className="fas fa-compass" /> Explore
                            </Link>
                        </li>
                        <li className={style.navItem}>
                            <Link
                                to='/blog'
                                className={style.navLinks}
                                onClick={closeMobileMenu}
                            >
                                <i className="fas fa-scroll" /> Blog
                            </Link>
                        </li>
                        <li className={style.navItem}>
                            <Link
                                to='/forums'
                                className={style.navLinks}
                                onClick={closeMobileMenu}
                            >
                                <i className="fas fa-book" /> Forums
                            </Link>
                        </li>
                        <li className={style.navItem}>
                            <Link
                                to='/about'
                                className={style.navLinks}
                                onClick={closeMobileMenu}
                            >
                                <i className="fas fa-question-circle" /> About
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
                                <div className={style.closeModal} onClick={resetForm}><a href="#">X</a></div>
                                <form className={style.formGroup} id="loginform">
                                    <div className={style.userGroup}>
                                        <i className="fas fa-at" id="userIcon" />
                                        <input 
                                            onChange={(e) => {setEmail(e.target.value)}} 
                                            className={style.input} 
                                            type="text" 
                                            placeholder="Email" 
                                            required />
                                    </div>
                                    <div className={style.userGroup}>
                                        <i className="fas fa-key" id="passwordIcon" />
                                        <input 
                                            onChange={(e) => {setPass(e.target.value)}} 
                                            className={style.input}
                                            type="password" 
                                            placeholder="Password" 
                                            required />
                                    </div>
                                    <a id="forgot" href="#">Forgot Password?</a>
                                    <button className={style.btnLogin} onClick={loginUser}>Log In</button>
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
                                <div className={style.closeModal} onClick={resetForm}><a href="#">X</a></div>

                                <form onSubmit={registerUser} className={style.formGroup} id="signform">
                                    <div className={style.userGroup}>
                                        <i className="fas fa-user" id="userIcon" />
                                        <input 
                                            onChange={(e) => {setName(e.target.value)}} 
                                            className={style.input}
                                            type="text" 
                                            placeholder="Username" 
                                            required />
                                    </div>
                                    <div className={style.userGroup}>
                                        <i className="fas fa-at" id="userIcon" />
                                        <input 
                                            onChange={(e) => {setEmail(e.target.value)}} 
                                            className={style.input}
                                            type="email" 
                                            placeholder="Email" 
                                            required />
                                    </div>
                                    <div className={style.userGroup}>
                                        <i className="fas fa-key" id="passwordIcon" />
                                        <input 
                                            onChange={(e) => {setPass(e.target.value)}} 
                                            className={style.input}
                                            type="password" 
                                            placeholder="Password" 
                                            required />
                                    </div>
                                    <div className={style.userGroup}>
                                        <i className="fas fa-lock" id="userIcon" />
                                        <input 
                                            onChange={(e) => {setRePass(e.target.value)}} 
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
    );

}

export default Navbar;