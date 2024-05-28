import { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import "../App.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("https://backend-password-reset-ybz2.onrender.com/auth/forgotPassword", {
    // Axios.post("http://localhost:3000/auth/forgotPassword", {
      email,
    })
      .then(response => {
        if(response.data.status) {
          alert("Check your email for RESET password link");
          //serverfolder--userRouter--newuser status true
            navigate('/login');
        }
        console.log(response.data)
      })
      .catch(err => console.log(err.message));
  };
  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Forgot Password</h2>

        <label htmlFor="email">Email: </label>
        <input
          id="email"
          type="email"
          autoComplete="off"
          placeholder="Enter Email address"
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit">Send</button>
      </form>
    </div>
  );
};


export default ForgotPassword;