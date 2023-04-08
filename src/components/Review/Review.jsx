import "./Review.scss";
import Header from "../Header/Header";
import femaleIcon from "../../assets/images/icons/female-icon.svg";
import { Link } from "react-router-dom";
import dogPic from "../../assets/images/border-collie.svg";
import quarantineIcon from "../../assets/images/icons/quarantine.svg";

function Review() {
  return (
    <>
      <Header />
      <div className="review">
        <div>
          <img className="review__img" src={dogPic} alt="pet" />
        </div>

        <div className="review__info-container">
          <div className="review__info">
            <div className="review__info-wrapper">
              <h2>Nora</h2>
              <img src={femaleIcon} alt="gender symbol" />
            </div>

            <div className="review__info-wrapper">
              <p className="review__info-text">Border Collie</p>
              <p className="review__info-text">2-5 years old</p>
            </div>
            <div className="review__info-character">
              <p className="review__info-tag">friendly</p>
              <p className="review__info-tag">playful</p>
              <p className="review__info-tag">active</p>
            </div>
          </div>
        </div>

        <div className="review__info-wrapper">
          <h2>Summary:</h2>
          <Link className="review__info-link" to="/tasks">
            edit
          </Link>
        </div>

        <div>
          <textarea className="review__info-textarea" type="text" />
        </div>

        <div className="review__info-wrapper">
          <h2>Daily Tasks:</h2>
          <Link className="review__info-link" to="/tasks">
            edit
          </Link>
        </div>
        <ul className="review__list">
          <li className="review__list-item">
            <label className="review__label" htmlFor="grooming">
              <input className="review__input" type="checkbox" />
              Grooming
            </label>
          </li>
          <li className="review__list-item">
            <label className="review__label" htmlFor="cageDesinfecting">
              <input className="review__input" type="checkbox" />
              Cage desinfecting
            </label>
          </li>
          <li className="review__list-item">
            <label className="review__label" htmlFor="eyeCleaning">
              <input className="review__input" type="checkbox" />
              Eye cleaning
            </label>
          </li>
          <li className="review__list-item">
            <label className="review__label" htmlFor="walk">
              <input className="review__input" type="checkbox" />
              Walk
            </label>
          </li>
        </ul>

        <div className="review__info-wrapper">
          <h2 className="review__title">Area</h2>
          <Link className="review__info-link" to="/area">
            edit
          </Link>
        </div>

        <div className="review__info-area">
          <img className="review__info-icon" src={quarantineIcon} alt="icon" />
          <p>Quarantine</p>
        </div>

        <div className="form__button-wrapper">
          <Link to="/" className="form__button">
            Add to Pawsible
          </Link>
        </div>
      </div>
    </>
  );
}

export default Review;
