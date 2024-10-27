import { useNavigate } from "react-router-dom";
import illustration from "../../assets/images/illustration.png";
import logo from "../../assets/images/logo.svg";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("isAuthenticated", "true");
    navigate("/dashboard");
  };

  return (
    <div className="loginContainer">
      <div className="right_container">
        <div className="padding">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <img
            src={illustration}
            alt="login_illustration"
            className="login_illustration"
          />
        </div>
      </div>
      <div className="login_container">
        <div className="flex">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>

          <div className="heading">
            <h1>Welcome!</h1>
            <span>Enter details to login.</span>
          </div>

          <div className="credentials_container">
            <div className="input">
              <input type="email" placeholder="Email" />
            </div>
            <div className="input">
              <input type="password" placeholder="Password" />
              <span>SHOW</span>
            </div>

            <div className="forget_password_button">FORGET PASSWORD?</div>

            <button onClick={handleLogin} className="primary_button">
              LOG IN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
