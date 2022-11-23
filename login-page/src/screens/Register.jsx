import * as React from 'react';
import * as ReactDOM from 'react-dom';
import '../css/Login.css';

const root = 
    ReactDOM.createRoot(document.getElementById('root'));

function Register() {
    return (
        <div>
            <meta charSet='UTF-8'/>
            <meta http-equiv='X-UA-Compatible' content='IE=edge' />
            <meta name='viewport' content='width=device-width, initial-scale=1.0' />
            <title>Register Account</title>
            
            <main>
                <div className='box'>
                    <div className='inner-box'>                        
                        <div className='carousel'>
                            <div className='images-wrapper'>
                                <img src="./photo1.webp" className='image img-1 show' alt="" />
                                <img src="./photo2.webp" className='image img-2' alt="" />
                                <img src="./photo3.webp" className='image img-3' alt="" />
                            </div>

                            <div className='text-slider'>
                                <div className='text-wrap'>
                                    <div className='text-group'>
                                        <h2>Be nature</h2>
                                        <h2>Be beauty</h2>
                                        <h2>Be you</h2>
                                    </div>
                                </div>

                                <div className='bullets'>
                                    <span className='active' data-value={1}></span>
                                    <span data-value={2}></span>
                                    <span data-value={3}></span>
                                </div>
                            </div>
                        </div>

                        <div className='forms-wrap'>
                            <form action="Register.jsx" autoComplete='off' className='sign-up-form' placeholder='enter your name'>
                                <div className='logo'>
                                    <a href="./LandingPage.jsx">
                                        <img src="./Logo.png" alt="Glow"/>
                                        <h4 className='logo-text'>Glow</h4>
                                    </a>
                                </div>

                                <div className='heading'>
                                    <h2>Get Started</h2>
                                    <h6>Already have an account?</h6>
                                    <a href="sign-in-form" className='toggle'>Sign in</a>
                                </div>

                                <div className='actual-form'>
                                    <div className='input-wrap'>
                                        <input 
                                            type='text'
                                            minLength={4}
                                            className='input-field'
                                            autoComplete='off'
                                            required
                                        />
                                        <label>Name</label>
                                    </div>

                                    <div className='input-wrap'>
                                        <input 
                                            type='email'
                                            className='input-field'
                                            autoComplete='off'
                                            required
                                        />
                                        <label>Email</label>
                                    </div>

                                    <div className='input-wrap'>
                                        <input 
                                            type='password'
                                            minLength={8}
                                            className='input-field'
                                            autoComplete='off'
                                            required
                                        />
                                        <label>Password</label>
                                    </div>

                                    <input type="submit" defaultValue={'Register'} className='sign-btn' />

                                    <p className='text'>
                                        I agree to the 
                                        <a href="#">Terms of Service</a> and 
                                        <a href="#">Privacy Policy</a>
                                    </p>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </main>

            <script src="./index.js"></script>
        </div>
    );
}



export default Register;