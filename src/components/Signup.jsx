import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Axios from "axios";


const Signup = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        // Axios.post('https://backend-password-reset-ybz2.onrender.com/auth/signup', {
        Axios.post('http://localhost:3000/auth/signup', {
          username,
          email,
          password,
        }).then(response => {
            if(response.data.status){ 
                navigate('/login')
            }
        }).catch (err =>
            console.log(err.message)
        );
      };

  return (
    <div className="signup-container">
    <form className="signup-form" onSubmit={handleSubmit}>
      <h2>Sign Up</h2>

      <label htmlFor="username">Username: </label>
      <input
        id="username"
        type="text"
        placeholder="Enter Username"
        onChange={(e) => setUsername(e.target.value)}
      />

      <label htmlFor="email">Email: </label>
      <input
        id="email"
        type="email"
        autoComplete="off"
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

      <button type="submit">Sign Up</button>
      <p>Already have an account? <Link to="/login">Login</Link></p> 
    </form>
  </div>
  )
}

export default Signup