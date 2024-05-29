
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import "../App.css";
import Axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  
  const navigate = useNavigate()
  
  // Axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault()
    Axios.post('https://backend-password-reset-ybz2.onrender.com/auth/login', {
    // Axios.post('http://localhost:3000/auth/login', {
      email,
      password,
    }).then(response => {
        if(response.data.status){  //serverfolder--userRouter--newuser status true
          navigate('/')
        }
        
    }).catch (err =>
        console.log(err.message)
    );
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <label htmlFor="email">Email: </label>
        <input
          id="email"
          type="email"
          placeholder="Enter Email address"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password: </label>
        <input
          id="password"
          type="password"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>

        <Link to="/forgotPassword">Forgot Password?</Link>

        <p>Do not Have an Account? <Link to="/signup">Sign Up</Link></p> 
      </form>
    </div>
  );
};


export default Login;