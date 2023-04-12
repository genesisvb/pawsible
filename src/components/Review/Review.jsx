import "./Review.scss";
import Header from "../Header/Header";
import quarantineIcon from "../../assets/images/icons/quarantine.svg";
import playRoomIcon from "../../assets/images/icons/pet-toy.svg";
import autoimmnuneIcon from "../../assets/images/icons/vet-check.svg";
import kennelIcon from "../../assets/images/icons/kennel.svg";

function Review({
  formValues,
  prevText,
  headingText,
  buttonText,
  onPrev,
  onNext,
  onEditBasicInfo,
  onEditArea,
  onEditTasks,
  onEditNotes,
}) {
  return (
    <>
      <Header heading={headingText} prevText={prevText} onPrev={onPrev} />
      <div className="review">
        <div>
          <img className="review__img" src={formValues.photo.url} alt="pet" />
        </div>

        <div className="review__info-container">
          <div className="review__info">
            <div className="review__info-wrapper">
              <h2>{formValues.name}</h2>
              {/* <img src={femaleIcon} alt="gender symbol" /> */}
              {formValues.gender}
            </div>

            <div className="review__info-wrapper">
              <p className="review__info-text">{formValues.breed}</p>
              <p className="review__info-text">{formValues.age} years old</p>
            </div>
            <div className="review__info-character">
              {formValues.character.map((item) => (
                <p key={item} className="review__info-tag">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="review__info-wrapper">
          <h2>Notes:</h2>
          <button className="review__info-link" onClick={onEditNotes}>
            edit
          </button>
        </div>

        <div className="review__info-textarea">{formValues.notes}</div>

        <div className="review__info-wrapper">
          <h2>Daily Tasks:</h2>
          <button className="review__info-link" onClick={onEditTasks}>
            edit
          </button>
        </div>
        <ul className="review__list">
          {formValues.tasks.map((task) => (
            <li key={task} className="review__list-item">
              {task}
            </li>
          ))}
        </ul>

        <div className="review__info-wrapper">
          <h2 className="review__title">Area</h2>
          <button className="review__info-link" onClick={onEditArea}>
            edit
          </button>
        </div>

        <div className="review__info-area">
          {formValues.area === "Quarantine" && (
            <img
              className="review__info-icon"
              src={quarantineIcon}
              alt="Quarantine area icon"
            />
          )}

          {formValues.area === "Autoimmune" && (
            <img
              className="review__info-icon"
              src={autoimmnuneIcon}
              alt="Autoimmune area icon"
            />
          )}

          {formValues.area === "Play Room" && (
            <img
              className="review__info-icon"
              src={playRoomIcon}
              alt="Play Room icon"
            />
          )}

          {formValues.area === "Solo Kennel" && (
            <img
              className="review__info-icon"
              src={kennelIcon}
              alt="Kennel icon"
            />
          )}

          <p>{formValues.area}</p>
        </div>

        {buttonText && (
          <div className="form__button-wrapper">
            <button className="form__button" onClick={onNext}>
              {buttonText}
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Review;
