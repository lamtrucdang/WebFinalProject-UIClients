import "./register.css"
import Login from '../login/Login';
import { Link } from "react-router-dom";

export default function Register() {
    return (
        <div className="register">
      <span className="registerTitle">Register</span>
      <div className="heading">
          <h6> Have an account?</h6>
          <a href="./Register.jsx" className='toggle'> <Link className="link" to="/login">Login Now</Link></a>
       </div>
      <form className="registerForm">
        <label>Username</label>
        <input className="registerInput" type="text" placeholder="Enter your username..." />
        <label>Email</label>
        <input className="registerInput" type="text" placeholder="Enter your email..." />
        <label>Password</label>
        <input className="registerInput" type="password" placeholder="Enter your password..." />
        <button className="registerButton">Register</button>
      </form>
        {/* <button className="registerLoginButton">
          <Link className="link" to="/login">Login</Link>
          </button> */}
    </div>
    )
}