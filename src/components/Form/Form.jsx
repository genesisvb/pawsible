import "./Form.scss";
import { Link } from "react-router-dom";

function Form() {
  return (
    <section>
      <div className="form">
        <h2 className="form__heading">Step 2: Add profile information</h2>
        <p className="form__subheading">Species:</p>
        <div className="form__wrapper">
          <div>
            <input
              className="form__radio-input"
              type="radio"
              id="petType1"
              name="species"
              value="Cat"
            />
            <label className="form__label" for="petType1">
              Cat
            </label>
          </div>

          <div>
            <input
              className="form__radio-input"
              type="radio"
              id="petType2"
              name="species"
              value="Dog"
            />
            <label className="form__label" for="petType2">
              Dog
            </label>
          </div>

          <div>
            <input
              className="form__radio-input"
              type="radio"
              id="petType3"
              name="species"
              value="Other"
            />
            <label className="form__label" for="petType3">
              Other
            </label>
          </div>
        </div>

        <label className="form__subheading" for="name">
          Name:
        </label>
        <input
          className="form__text-input"
          type="text"
          placeholder="Add a name"
        />

        <label className="form__subheading" for="breed">
          Breed:
        </label>
        <input
          className="form__text-input"
          type="text"
          placeholder="Add a breed"
        />
        <label className="form__subheading" for="gender">
          Gender:
        </label>
        <div className="form__wrapper">
          <div>
            <input
              className="form__radio-input"
              type="radio"
              id="genderType1"
              name="gender"
              value="Female"
            />
            <label className="form__label" for="genderType2">
              Female
            </label>
          </div>

          <div>
            <input
              className="form__radio-input"
              type="radio"
              id="genderType2"
              name="gender"
              value="Male"
            />
            <label className="form__label" for="genderType2">
              Male
            </label>
          </div>

          <div>
            <input
              className="form__radio-input"
              type="radio"
              id="genderType3"
              name="gender"
              value="Unknown"
            />
            <label className="form__label" for="genderType3">
              Unknown
            </label>
          </div>
        </div>

        <div>
          <label className="form__subheading" for="character">
            Character:{" "}
            <span className="form__comment">(choose all that apply)</span>
          </label>
        </div>

        <div className="form__tags">
          <label className="form__tag">
            <input
              type="checkbox"
              name="checkbox1"
              value="friendly"
              className="form__checkbox-input"
            />
            <span className="form__span">friendly</span>
          </label>

          <label className="form__tag">
            <input
              type="checkbox"
              name="checkbox2"
              value="active"
              className="form__checkbox-input"
            />
            <span className="form__span">active</span>
          </label>

          <label className="form__tag">
            <input
              type="checkbox"
              name="checkbox3"
              value="cautious"
              className="form__checkbox-input"
            />
            <span className="form__span">cautious</span>
          </label>
        </div>

        <div className="form__tags">
          <label className="form__tag">
            <input
              type="checkbox"
              name="checkbox4"
              value="aggressive"
              className="form__checkbox-input"
            />
            <span className="form__span">aggressive</span>
          </label>

          <label className="form__tag">
            <input
              type="checkbox"
              name="checkbox5"
              value="calm"
              className="form__checkbox-input"
            />
            <span className="form__span">calm</span>
          </label>

          <label className="form__tag">
            <input
              type="checkbox"
              name="checkbox6"
              value="playful"
              className="form__checkbox-input"
            />
            <span className="form__span">playful</span>
          </label>
        </div>

        <div className="form__ages-input">
          <label className="form__subheading" for="gender">
            Age:
          </label>

          <div className="form__ages-wrapper">
            <div className="form__input-wrapper">
              <input
                className="form__radio-input"
                type="radio"
                id="petAge1"
                name="age"
                value="0-1"
              />
              <label className="form__label" for="petAge1">
                0-1 years
              </label>
            </div>

            <div className="form__input-wrapper">
              <input
                className="form__radio-input"
                type="radio"
                id="petAge2"
                name="age"
                value="2-5"
              />
              <label className="form__label" for="petAge2">
                2-5 years
              </label>
            </div>

            <div className="form__input-wrapper">
              <input
                className="form__radio-input"
                type="radio"
                id="petAge3"
                name="age"
                value="6-9"
              />
              <label className="form__label" for="petAge3">
                6-9 years
              </label>
            </div>

            <div className="form__input-wrapper">
              <input
                className="form__radio-input"
                type="radio"
                id="petAge4"
                name="age"
                value="+10"
              />
              <label className="form__label" for="petAge4">
                +10 years
              </label>
            </div>
          </div>
        </div>
        <div className="form__button-wrapper">
          <Link to="/area" className="form__button">
            Next
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Form;
