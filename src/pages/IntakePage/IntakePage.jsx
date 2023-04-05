import "./IntakePage.scss";
import arrowLeft from "../../assets/images/icons/chevron-left.svg";
import closeIcon from "../../assets/images/icons/close-icon.svg";
import { Link } from "react-router-dom";
import PhotoUpload from "../../components/PhotoUpload/PhotoUpload";

function IntakePage() {
  return (
    <>
      <div className="intake-header">
        <Link className="intake-header__link" to="/">
          <img
            className="intake-header__link-icon"
            src={arrowLeft}
            alt="arrow back"
          />
          <p className="intake-header__text">Home</p>
        </Link>

        <div className="intake-header__title-wrapper">
          <p className="intake-header__title">Basic Information</p>
        </div>

        <div className="intake-header__button-wrapper">
          <img
            className="intake-header__button"
            src={closeIcon}
            alt="close icon"
          />
        </div>
      </div>
      <div>
        <PhotoUpload />
      </div>
    </>
  );
}

export default IntakePage;
