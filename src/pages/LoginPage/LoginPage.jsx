import "./LoginPage.scss";
import logoPaw from "../../assets/images/logos/logo-paw.svg";
import logo from "../../assets/images/logos/pawsible.svg";
import { useNavigate } from "react-router-dom";
import { CiLock } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";

function LoginPage() {
  const navigate = useNavigate();
  function onSubmit(event) {
    event.preventDefault();
    navigate("/");
  }

  return (
    <div className="login-page">
      <img className="login-page__logo" src={logoPaw} alt="logo dog paw" />
      <img className="login-page__logo" src={logo} alt="text logo" />

      <form className="login-page__form" onSubmit={onSubmit}>
        <label className="login-page__form-label" htmlFor="username">
          Username
        </label>
        <div className="login-page__input-wrapper">
          <CgProfile className="login-page__icon" />
          <input
            className="login-page__form-input"
            name="user"
            type="text"
            placeholder="Enter your username"
          />
        </div>

        <label className="login-page__form-label" htmlFor="password">
          <CiLock />
          Password
          <input
            className="login-page__form-input"
            name="password"
            type="password"
            placeholder="Enter your password"
          />
        </label>
        <div className="login-page__button-wrapper">
          <button type="submit" className="login-page__button">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
