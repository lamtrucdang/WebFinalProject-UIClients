import "./login.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="login">
      <span className="loginTitle">Welcome Back</span>
      
      <form action="Login.jsx" autoComplete="off" className="loginForm">
        <div className="heading">
          <h6>Not registered yet?</h6>
          <a href="./Register.jsx" className='toggle'> <Link className="link" to="/register">Register Here</Link></a>
       </div>
<label>Email</label>
        <input className="loginInput" type="text" placeholder="Enter your email..." />
        <label>Password</label>
        <input className="loginInput" type="password" placeholder="Enter your password..." />
        <button className="loginButton">Login</button>
      </form>
        {/* <button className="loginRegisterButton">
        <Link className="link" to="/register">Register</Link>
        </button> */}
    </div> 
  );
}