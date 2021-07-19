import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import {auth} from "../firebaseConfig";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } 
    else 
    {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);
  
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
      document.getElementById("signform").reset();
  }

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Chroma
            <i class='fas fa-palette' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              <i className="fas fa-home" /> Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/explore'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                <i className="fas fa-compass" /> Explore
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/blog'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                <i className="fas fa-scroll" /> Blog
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/forums'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                <i className="fas fa-book" /> Forums
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/about'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                <i className="fas fa-question-circle" /> About
              </Link>
            </li>
            <li className='nav-item'>
              <input
                className='nav-input'
                name='search'
                type='text'
                placeholder='🔍Search'
              />
            </li>
          </ul>
          
        </div>

        <div className="loginSignArea">

          <div className="modal" id="loginModal">
            <div className="modalWindow">
              <div className="modalContent">
                <div className="closeModal" onClick={resetForm}><a href="#">X</a></div>
                  <form className="formGroup" id="loginform">
                    <div className="userGroup">
                      <i className="fas fa-at" id="userIcon" />
                      <input 
                        onChange={(e) => {setEmail(e.target.value)}} 
                        className="input" 
                        type="text" 
                        placeholder="Email" 
                        required />
                      </div>
                                <div className="userGroup">
                                    <i className="fas fa-key" id="passwordIcon" />
                                    <input 
                                        onChange={(e) => {setPass(e.target.value)}} 
                                        className="input" 
                                        type="password" 
                                        placeholder="Password" 
                                        required />
                                </div>
                                <a id="forgot">Forgot Password?</a>
                                <button className="btnLogin" onClick={loginUser}>Log In</button>
                                <p>OR</p>

                                <div className="alterLogin">
                                    <button type="button" className="btnLogin" style={{color: "rgb(209, 26, 26)"}}><i style={{color: "rgb(209, 26, 26)"}} className="fab fa-google"></i>Google</button>
                                    <button type="button" className="btnLogin" style={{color: "rgb(14, 80, 226)"}}><i style={{color: "rgb(14, 80, 226)"}} className="fab fa-linkedin-in"></i>Linkedin</button>
                                    <button type="button" className="btnLogin" style={{color: "rgb(14, 131, 226)"}}><i style={{color: "rgb(14, 131, 226)"}} className="fab fa-twitter"></i>Facebook</button>
                                    <button type="button" className="btnLogin" style={{color: "rgb(14, 200, 226)"}}><i style={{color: "rgb(14, 200, 226)"}} className="fab fa-facebook-f"></i>Twitter</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="modal" id="signModal" >
                    <div className="modalWindow">
                        <div className="modalContent">

                            <div className="closeModal" onClick={resetForm}><a href="#">X</a></div>

                            <form onSubmit={registerUser} className="formGroup" id="signform">
                                <div className="userGroup">
                                    <i className="fas fa-user" id="userIcon" />
                                    <input 
                                        onChange={(e) => {setName(e.target.value)}} 
                                        className="input" 
                                        type="text" 
                                        placeholder="Username" 
                                        required />
                                </div>
                                <div className="userGroup">
                                    <i className="fas fa-at" id="userIcon" />
                                    <input 
                                        onChange={(e) => {setEmail(e.target.value)}} 
                                        className="input" 
                                        type="email" 
                                        placeholder="Email" 
                                        required />
                                </div>
                                <div className="userGroup">
                                    <i className="fas fa-key" id="userIcon" />
                                    <input 
                                        onChange={(e) => {setPass(e.target.value)}} 
                                        className="input" 
                                        type="password" 
                                        placeholder="Password" 
                                        required />
                                </div>
                                <div className="userGroup">
                                    <i className="fas fa-lock" id="userIcon" />
                                    <input 
                                        onChange={(e) => {setRePass(e.target.value)}} 
                                        className="input" 
                                        type="password" 
                                        placeholder="Reenter Password" 
                                        required />
                                </div>
                                <input type="submit" className="btnLogin" value="Sign Up" />
                                <p>OR</p>

                                <div className="alterLogin">
                                    <button type="button" ref={googleBtn} onClick={onButtonClick} className="btnLogin" id="google" style={{color: "rgb(209, 26, 26)"}}><i style={{color: "rgb(209, 26, 26)"}} className="fab fa-google"></i>Google</button>
                                    <button type="button" className="btnLogin" style={{color: "rgb(14, 80, 226)"}}><i style={{color: "rgb(14, 80, 226)"}} className="fab fa-linkedin-in"></i>Linkedin</button>
                                    <button type="button" className="btnLogin" style={{color: "rgb(14, 131, 226)"}}><i style={{color: "rgb(14, 131, 226)"}} className="fab fa-twitter"></i>Facebook</button>
                                    <button type="button" className="btnLogin" style={{color: "rgb(14, 200, 226)"}}><i style={{color: "rgb(14, 200, 226)"}} className="fab fa-facebook-f"></i>Twitter</button>
                                </div>
                            </form>
                        </div>
                    </div> 
                </div>

                <button className="navLogin" id="logIn"><a href="#loginModal">Log In</a></button> 
                <button className="navLogin" id="signUp"><a href="#signModal">Sign Up</a></button> 
            </div>
      </nav>
    </>
  );
}

export default Navbar;