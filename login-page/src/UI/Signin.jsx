import * as React from 'react';
import * as ReactDOM from 'react-dom';
import '../index.css';

const root = 
    ReactDOM.createRoot(document.getElementById('root'));

function Signin() {
    return (
        <div>
            <meta charSet='UTF-8'/>
            <meta http-equiv='X-UA-Compatible' content='IE=edge' />
            <meta name='viewport' content='width=device-width, initial-scale=1.0' />
            <title>Sign in & Sign up Form</title>

            <main>
                <div className='box'>
                    <div className='inner-box'>
                        <div className='forms-wrap'>
                            <form action="Signin.jsx" autoComplete='off' className='sign-in-form'>
                                <div className='logo'>
                                    <img src="./Logo.png" alt="Glow" />
                                    <h4>Glow</h4>
                                </div>

                                <div className='heading'>
                                    <h2>Welcome Back</h2>
                                    <h6>Not registered yet?</h6>
                                    <a href="#" className='toggle'>Sign up</a>
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
                                            type='password'
                                            minLength={8}
                                            className='input-field'
                                            autoComplete='off'
                                            required
                                        />
                                        <label>Password</label>
                                    </div>

                                    <input type="submit" defaultValue={'Sign In'} className='sign-btn' />

                                    <p className='text'>
                                        <a href="#">Forgot Password?</a>
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

export default Signin;