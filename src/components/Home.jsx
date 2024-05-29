import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";

const Home = () => {
  const navigate = useNavigate();

  // Axios.defaults.withCredentials = true;

  const handleLogout = () => {
    Axios.get("https://backend-password-reset-ybz2.onrender.com/auth/logout")
    // Axios.get("http://localhost:3000/auth/logout")
      .then((res) => {
        if (res.data.status) {
          navigate("/login");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      Home
      <button>
        <Link to="/dashboard" style={{'color':'white'}}>Dashboard</Link>{" "}
      </button>
      <br /> <br />
      <button><Link to='/login'  style={{'color':'white'}}>Login</Link></button>
      <br/> <br/>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
