import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <meta charSet='UTF-8'/>
            <meta http-equiv='X-UA-Compatible' content='IE=edge' />
            <meta name='viewport' content='width=device-width, initial-scale=1.0' />
            <title>Sign in</title>
            
            <main>
                <div className='box'>
                    <div className='inner-box'>
                        <div className='forms-wrap'>
                            <form action="Signin.jsx" autoComplete='off' className='sign-in-form'>
                                <div className='logo'>
                                    <a href="./LandingPage.jsx">
                                        <img src="./img/Logo.png" alt="Glow"/>
                                        <h4 className='logo-text'>Glow</h4>
                                    </a>
                                </div>

                                <div className='heading'>
                                    <h2>Welcome Back</h2>
                                    <h6>Not registered yet?</h6>
                                    <a href="./Signup.jsx" className='toggle'> Sign up</a>
                                </div>

                                <div className='actual-form'>
                                    <div className='input-wrap'>
                                        <input 
                                            type='text'
                                            minLength={4}
                                            className='input-field'
                                            autoComplete='off'
                                            required
                                            placeholder="Name"
                                        />
                                        <label></label>
                                    </div>

                                    <div className='input-wrap'>
                                        <input 
                                            type='password'
                                            minLength={8}
                                            className='input-field'
                                            autoComplete='off'
                                            required
                                            placeholder="Password"
                                        />
                                        <label></label>
                                    </div>

                                    <input type="submit" defaultValue={'Sign In'} className='sign-btn' />

                                    <p className='text'>
                                        <a href="#">Forgot Password?</a>
                                    </p>
                                </div>
                            </form>

                            <form action="Signin.jsx" autoComplete='off' className='sign-up-form'>
                                <div className='logo'>
                                    <img src="./img/Logo.png" alt="Glow" />
                                    <h4>Glow</h4>
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
                                            placeholder = "Name"
                                        />
                                        <label></label>
                                    </div>

                                    <div className='input-wrap'>
                                        <input 
                                            type='email'
                                            className='input-field'
                                            autoComplete='off'
                                            required
                                            placeholder= "Email"
                                        />
                                        <label></label>
                                    </div>

                                    <div className='input-wrap'>
                                        <input 
                                            type='password'
                                            minLength={8}
                                            className='input-field'
                                            autoComplete='off'
                                            required
                                            placeholder= "Password"
                                        />
                                        <label></label>
                                    </div>

                                    <input type="submit" defaultValue={'Sign Up'} className='sign-btn' />

                                    <p className='text'>
                                        I agree to the 
                                        <a href="#">Terms of Service</a> and 
                                        <a href="#">Privacy Policy</a>
                                    </p>
                                </div>
                            </form>
                        </div>

                        <div className='carousel'>
                            <div className='images-wrapper'>
                                <img src="./img/photo1.webp" className='image img-1 show' alt="" />
                                <img src="./img/photo2.webp" className='image img-2' alt="" />
                                <img src="./img/photo3.webp" className='image img-3' alt="" />
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
    </div>
  );
}