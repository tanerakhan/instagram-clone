import { useState, useEffect } from "react";
import "src/assets/styles/components/login.scss";
import apple from "src/assets/images/apple.png";
import android from "src/assets/images/android.png";
import first from "src/assets/images/1.png";
import second from "src/assets/images/2.png";
import third from "src/assets/images/3.png";
import { footerLink } from "src/content";

export default function Login() {
  const [show, setShow] = useState(false);
  const [slides] = useState([first, second, third]);
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClickShow = () => setShow(!show);
  const handleChangeInput = () => {};
  let timeout;
  const loopImages = () => {
    if (slideIndex < slides.length) {
      timeout = setTimeout(() => setSlideIndex(slideIndex + 1), 2000);
    } else {
      setSlideIndex(0);
    }
  };

  const activeClass = (i) => {
    if (i === slideIndex) {
      return "login-item-image login-item-image-active";
    } else if (i !== slideIndex) {
      return "login-item-image login-item-image-default";
    }
  };

  useEffect(() => {
    loopImages();
    return () => {
      clearTimeout(timeout);
    };
  }, [slideIndex]);

  return (
    <div className="login-container">
      <div className="login-content">
        <div className="login-content-image">
          {slides.map((slide, i) => (
            <img key={i} className={activeClass(i)} src={slide} />
          ))}
        </div>
        <div className="login-content-form">
          <div className="login-box">
            <div className="login-logo-area bg-spread">
              <div className="login-images-sets"></div>
            </div>
            <div className="login-form-area">
              <form>
                <div className="login-form-group">
                  <div className="login-form-group-item">
                    <label htmlFor="email">
                      <input
                        onMouseDown={() => handleChangeInput}
                        type="email"
                        id="email"
                      />
                      <span className="input-label">
                        Phone number, username, or email
                      </span>
                      <span className="input-label-bg"></span>
                    </label>
                  </div>
                  <div className="login-form-group-item">
                    {show}
                    <label htmlFor="password">
                      <input type={show ? "text" : "password"} id="password" />
                      <span className="input-label">Password</span>
                      <span className="input-label-bg"></span>
                    </label>
                    <div className="password-hint">
                      <button type="button" onClick={() => handleClickShow()}>
                        Show
                      </button>
                    </div>
                  </div>

                  <div className="login-form-group-item login-form-group-item-override">
                    <button className="login-action-button login-submit-button">
                      Log In
                    </button>
                  </div>
                  <div className="login-form-group-item login-form-group-item-override login-form-seperator-container">
                    <div className="login-form-seperator-line"></div>
                    <div className="login-form-seperator-text">or</div>
                    <div className="login-form-seperator-line"></div>
                  </div>
                  <div className="login-form-group-item login-form-group-item-override">
                    <button className="login-action-button fb-color">
                      Log in with Facebook
                    </button>
                  </div>
                  <div className="login-form-group-item login-form-group-item-override">
                    <a href="/" className="login-action-anchor">
                      Forgot password?
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="login-box">
            <p className="login-signup-box">
              Don't have an account?
              <a href="/" className="login-signup-link-anchor">
                <span className="login-signup-link"> Sign up </span>
              </a>
            </p>
          </div>
          <div className="login-box-other">
            <div className="login-box-other-description">
              <p>Get the app</p>
            </div>
            <div className="login-box-other-images-group">
              <div className="login-box-other-images-group-item">
                <a href="/">
                  <img src={apple} alt="apple" />
                </a>
                <a href="/">
                  <img src={android} alt="android" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="login-footer">
        <ul className="login-list">
          {footerLink.map((link, i) => (
            <li key={i}>
              <a className="footer-text-color" href="/">
                {link}
              </a>
            </li>
          ))}
        </ul>
        <div className="footer-copyright-items">
          <span className="footer-text-color">English</span>
          <span className="footer-text-color">© 2022 Instagram from Meta</span>
        </div>
      </div>
    </div>
  );
}
