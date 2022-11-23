import * as React from 'react';
import * as ReactDOM from 'react-dom';
import '../css/Login.css';

const root = 
    ReactDOM.createRoot(document.getElementById('root'));

function Register() {
    return (
        <div>
            <meta charSet='UTF-8' />
            <meta http-equiv='X-UA-Compatible' content='IE=edge' />
            <meta name='viewport' content='width=device-width, initial-scale=1.0' />
            <title>Register Account</title>

            <main>
                <div className='box'>
                    <div className='inner-box'>
                        <div className='forms-wrap'>
                            <form action="Register.jsx" autoComplete='off' className='sign-in-form'>
                                <div className='logo'>
                                    <a href='./LandingPage.jsx'>
                                        <img src='./Logo.png' alt='Glow' />
                                        <h4 className='logo-text'>Glow</h4>
                                    </a>
                                </div>

                                <div className='heading'>
                                    <h2>Register</h2>
                                    <h6>Already have an account?</h6>
                                    <a href='./Login.jsx' className='toggle'> Log in here</a>
                                </div>

                                <div className='actual-form'>
                                    <div className='input-wrap'>
                                        <input
                                            placeholder=''
                                            type='text'
                                            minLength={4}
                                            className='input-field'
                                            autoComplete='off'
                                            required
                                        />
                                        <label className='form-label'>Username</label>
                                    </div>

                                    <div className='input-wrap'>
                                        <input
                                            placeholder=''
                                            type='email'
                                            className='input-field'
                                            autoComplete='off'
                                            required
                                        />
                                        <label className='form-label'>Email</label>
                                    </div>

                                    <div className='input-wrap'>
                                        <input
                                            placeholder=''
                                            type='password'
                                            minLength={8}
                                            className='input-field'
                                            autoComplete='off'
                                            required
                                        />
                                        <label className='form-label'>Password</label>
                                    </div>

                                    <input type='submit' defaultValue={'Register'} className='sign-btn' />

                                    <p className='text'>
                                        By clicking Register, you agree to our <a href="#">Policy Privacy</a> and <a href="#">Terms of Use</a>.
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}



export default Register;