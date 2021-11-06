import React from "react";
import { Link } from "react-router-dom";
import loginImage from "images/loginImage.png";
import loginLogo from "images/loginLogo.png";
import "styles/Login.scss";

function Login() {
  return (
    <div className="login-wrapper">
      <div className="login-container">
        <img src={loginLogo} alt="login-logo"/>
        <div className="loginpage-form">
          <h2>Giriş</h2>
          <p>
            Hesabınız yoxdur? <span>Qeydiyyatdan keç</span>
          </p>
          <form>
            <div className="user-input-wrapper">
              <svg
                width="20"
                height="22"
                viewBox="0 0 20 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 11C12.7614 11 15 8.76142 15 6C15 3.23858 12.7614 1 10 1C7.23858 1 5 3.23858 5 6C5 8.76142 7.23858 11 10 11Z"
                  stroke="#B8B8B8"
                  stroke-width="2"
                />
                <path
                  d="M15 13H15.352C16.0831 13.0002 16.7889 13.2674 17.3369 13.7513C17.8849 14.2352 18.2373 14.9026 18.328 15.628L18.719 18.752C18.7542 19.0334 18.7291 19.3191 18.6454 19.5901C18.5617 19.8611 18.4214 20.1112 18.2336 20.3238C18.0459 20.5364 17.8151 20.7066 17.5566 20.8232C17.298 20.9398 17.0176 21.0001 16.734 21H3.266C2.98238 21.0001 2.70199 20.9398 2.44345 20.8232C2.1849 20.7066 1.9541 20.5364 1.76638 20.3238C1.57865 20.1112 1.43829 19.8611 1.3546 19.5901C1.27092 19.3191 1.24583 19.0334 1.281 18.752L1.671 15.628C1.7617 14.9022 2.11442 14.2346 2.66283 13.7506C3.21125 13.2667 3.91758 12.9997 4.649 13H5"
                  stroke="#B8B8B8"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <input type="text" className="user-input" placeholder="Fin kod"></input>
            </div>
            <div className="user-input-wrapper">
              <svg
                width="20"
                height="22"
                viewBox="0 0 20 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 9H3C1.89543 9 1 9.89543 1 11V19C1 20.1046 1.89543 21 3 21H17C18.1046 21 19 20.1046 19 19V11C19 9.89543 18.1046 9 17 9Z"
                  stroke="#B8B8B8"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4 9V4C4 3.20435 4.31607 2.44129 4.87868 1.87868C5.44129 1.31607 6.20435 1 7 1H13C13.7956 1 14.5587 1.31607 15.1213 1.87868C15.6839 2.44129 16 3.20435 16 4V5"
                  stroke="#B8B8B8"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <input type="password" className="user-input" placeholder="şifrə"></input>
            </div>
            <button type="submit" className="login-btn">
              <Link to="/home"> Giriş</Link>
            </button>
          </form>
        </div>
        <div className="form-end">
          <div >
            <input type="checkbox" name="checkbox" id="checkbox" />
            <label htmlFor="checkbox">Məni xatırla</label>
          </div>
          <p>Şifrəni unutmusunuz?</p>
        </div>
      </div>
      <div className="image-wrapper">
        <img src={loginImage} alt="login-image"/>
      </div>
    </div>
  );
}

export default Login;
