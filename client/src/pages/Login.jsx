import Google from "../img/google.png";
import Facebook from "../img/facebook.png";
import Github from "../img/github.png";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

const Login = () => {
  const google = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };

  const github = () => {
    window.open("http://localhost:5000/auth/github", "_self");
  };

  const facebook = () => {
    window.open("http://localhost:5000/auth/facebook", "_self");
  };

  return (
    <div className="login">
      <h1 className="loginTitle">Register or Login</h1>
      <div className="wrapper">
        <div className="left">
          <label className="media">Login by using :</label>
          <div className="loginButton google" onClick={google}>
            <img src={Google} alt="" className="icon" />
          </div>
          <div className="loginButton facebook" onClick={facebook}>
            <img src={Facebook} alt="" className="icon" />
          </div>
          <div className="loginButton github" onClick={github}>
            <img src={Github} alt="" className="icon" />
          </div>
        </div>
        <div className="center">
          <div className="line" />
          <div className="or">OR</div>
        </div>
        <div className="right">
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button className="submit">Login</button>
          <div>
            <button className="submitRegister">Register</button>
            <p className="frgLink">
              <Link to={"/forgot"}>Forgot password?</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
