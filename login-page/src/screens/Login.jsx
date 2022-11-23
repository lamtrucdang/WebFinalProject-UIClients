import * as React from 'react';
import * as ReactDOM from 'react-dom';
import '../css/Login.css';

const root =
    ReactDOM.createRoot(document.getElementById('root'));

function Login() {
    return (
        <div>
            <meta charSet='UTF-8' />
            <meta http-equiv='X-UA-Compatible' content='IE=edge' />
            <meta name='viewport' content='width=device-width, initial-scale=1.0' />
            <title>Log In</title>

            <main>
                <div className='box'>
                    <div className='inner-box'>
                        <div className='forms-wrap'>
                            <form action="Login.jsx" autoComplete='off' className='sign-in-form'>
                                <div className='logo'>
                                    <a href="./LandingPage.jsx">
                                        <img src="./Logo.png" alt="Glow" />
                                        <h4 className='logo-text'>Glow</h4>
                                    </a>
                                </div>

                                <div className='heading'>
                                    <h2>Welcome Back</h2>
                                    <h6>Not registered yet?</h6>
                                    <a href="./Register.jsx" className='toggle'> Register here</a>
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
                                            type='password'
                                            minLength={8}
                                            className='input-field'
                                            autoComplete='off'
                                            required
                                        />
                                        <label className='form-label'>Password</label>
                                    </div>

                                    <input type="submit" defaultValue={'Log In'} className='sign-btn' />

                                    <p className='text'>
                                        <a href="#">Forgot Password?</a>
                                    </p>
                                </div>
                            </form>
                        </div>

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
                    </div>
                </div>
            </main>

            <script src="./index.js"></script>
        </div>
    );
}



export default Login;