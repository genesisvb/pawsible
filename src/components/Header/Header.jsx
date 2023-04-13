import "./Header.scss";
import arrowLeft from "../../assets/images/icons/chevron-left.svg";
import closeIcon from "../../assets/images/icons/close-icon.svg";
import { useNavigate } from "react-router-dom";

function Header({ heading, prevText, onPrev }) {
  const navigate = useNavigate();

  return (
    <div className="intake-header">
      <button className="intake-header__button" onClick={onPrev} type="button">
        <img
          className="intake-header__button-icon"
          src={arrowLeft}
          alt="arrow back"
        />
        <p className="intake-header__text">{prevText}</p>
      </button>

      <div className="intake-header__title-wrapper">
        <p className="intake-header__title">{heading}</p>
      </div>

      <button
        className="intake-header__button"
        type="button"
        onClick={() => navigate("/")}
      >
        <img
          className="intake-header__button-icon"
          src={closeIcon}
          alt="close icon"
        />
      </button>
    </div>
  );
}

export default Header;
