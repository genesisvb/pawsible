import "./Form.scss";

function Form() {
  return (
    <section>
      <form className="form">
        <h2 className="form__heading">Step 2: Add profile information</h2>
        <p className="form__subheading">Species:</p>
        <div className="form__wrapper">
          <div>
            <input
              className="form__radio-input"
              type="radio"
              id="petType1"
              name="cat"
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
              name="dog"
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
              name="other"
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
              name="female"
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
              name="male"
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
              name="unknown"
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
                name="0-1"
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
                name="2-5"
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
                name="6-9"
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
                name="+10"
                value="+10"
              />
              <label className="form__label" for="petAge4">
                +10 years
              </label>
            </div>
          </div>
        </div>
        <div className="form__button-wrapper">
          <button className="form__button">Next</button>
        </div>
      </form>
    </section>
  );
}

export default Form;
