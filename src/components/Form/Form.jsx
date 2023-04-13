import { useState } from "react";
import "./Form.scss";
import Header from "../Header/Header";
import editPenIcon from "../../assets/images/icons/edit-pen.svg";
import photoUploadIcon from "../../assets/images/icons/upload.svg";

function Form({ formValues, prevText, onPrev, onNext }) {
  const [photoPreviewUrl, setPhotoPreviewUrl] = useState(formValues.photo.url);
  const [errors, setErrors] = useState({});

  const handlePhotoChange = (e) => {
    const photoFile = e.target.files[0];
    setPhotoPreviewUrl(
      photoFile && photoFile.type.startsWith("image/")
        ? URL.createObjectURL(photoFile)
        : formValues.photo.url
    );
  };

  function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const photoFile = formData.get("photo");

    const newValues = {
      photo:
        photoFile && photoFile.type.startsWith("image/")
          ? { url: URL.createObjectURL(photoFile), file: photoFile }
          : formValues.photo,
      species: formData.get("species"),
      name: formData.get("name").trim(),
      breed: formData.get("breed").trim(),
      gender: formData.get("gender"),
      character: formData.getAll("character"),
      age: formData.get("age"),
    };

    const errors = {
      photo: !newValues.photo.url,
      species: !newValues.species,
      name: !newValues.name,
      breed: !newValues.breed,
      gender: !newValues.gender,
      character: newValues.character.length === 0,
      age: !newValues.age,
    };

    console.log(errors);

    if (Object.values(errors).some((value) => value)) {
      setErrors(errors);
    } else {
      onNext(newValues);
    }
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <Header
          heading="Basic Information"
          prevText={prevText}
          onPrev={onPrev}
        />
        <div className="form">
          <section className="form__photo-section">
            <h2 className="form__heading">
              Step 1: Tap below to upload a picture
            </h2>
            {photoPreviewUrl && (
              <div className="form__photo-preview-wrapper">
                <img
                  className="form__photo-preview"
                  alt="pet"
                  src={photoPreviewUrl}
                />
                <label className="form__photo-edit-button" htmlFor="photo">
                  <img
                    className="form__photo-edit-icon"
                    src={editPenIcon}
                    alt="edit icon"
                  />
                </label>
              </div>
            )}
            {!photoPreviewUrl && (
              <label
                className={`form__photo-empty ${
                  errors.photo ? "form__photo-empty--error" : ""
                }`}
                htmlFor="photo"
              >
                <img className="form__photo-empty-icon" src={photoUploadIcon} />
              </label>
            )}
            <input
              type="file"
              id="photo"
              name="photo"
              className="form__photo-input"
              onChange={handlePhotoChange}
            ></input>
          </section>
          <section>
            <h2 className="form__heading">Step 2: Add profile information</h2>
            <p
              className={`form__subheading ${
                errors.species ? "pet-form__error-message" : ""
              }`}
            >
              Species:
            </p>
            <div className="form__wrapper">
              <div>
                <input
                  className="form__radio-input"
                  type="radio"
                  id="petType1"
                  name="species"
                  value="Cat"
                  defaultChecked={formValues.species === "Cat"}
                />
                <label className="form__label" htmlFor="petType1">
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
                  defaultChecked={formValues.species === "Dog"}
                />
                <label className="form__label" htmlFor="petType2">
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
                  defaultChecked={formValues.species === "Other"}
                />
                <label className="form__label" htmlFor="petType3">
                  Other
                </label>
              </div>
            </div>

            <label
              className={`form__subheading ${
                errors.name ? "pet-form__error-message" : ""
              }`}
              htmlFor="name"
            >
              Name:
            </label>
            <input
              className="form__text-input"
              type="text"
              name="name"
              id="name"
              placeholder="Add a name"
              defaultValue={formValues.name}
            />

            <label
              className={`form__subheading ${
                errors.breed ? "pet-form__error-message" : ""
              }`}
              htmlFor="breed"
            >
              Breed:
            </label>
            <input
              className="form__text-input"
              type="text"
              name="breed"
              id="breed"
              placeholder="Add a breed"
              defaultValue={formValues.breed}
            />

            <label
              className={`form__subheading ${
                errors.gender ? "pet-form__error-message" : ""
              }`}
              htmlFor="gender"
            >
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
                  defaultChecked={formValues.gender === "Female"}
                />
                <label className="form__label" htmlFor="genderType1">
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
                  defaultChecked={formValues.gender === "Male"}
                />
                <label className="form__label" htmlFor="genderType2">
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
                  defaultChecked={formValues.gender === "Unknown"}
                />
                <label className="form__label" htmlFor="genderType3">
                  Unknown
                </label>
              </div>
            </div>

            <div>
              <label
                className={`form__subheading ${
                  errors.character ? "pet-form__error-message" : ""
                }`}
                htmlFor="character"
              >
                Character:{" "}
                <span className="form__comment">(choose all that apply)</span>
              </label>
            </div>

            <div className="form__tags">
              <label className="form__tag">
                <input
                  type="checkbox"
                  name="character"
                  value="friendly"
                  className="form__checkbox-input"
                  defaultChecked={formValues.character.includes("friendly")}
                />
                <span className="form__span">friendly</span>
              </label>

              <label className="form__tag">
                <input
                  type="checkbox"
                  name="character"
                  value="active"
                  className="form__checkbox-input"
                  defaultChecked={formValues.character.includes("active")}
                />
                <span className="form__span">active</span>
              </label>

              <label className="form__tag">
                <input
                  type="checkbox"
                  name="character"
                  value="cautious"
                  className="form__checkbox-input"
                  defaultChecked={formValues.character.includes("cautious")}
                />
                <span className="form__span">cautious</span>
              </label>
            </div>

            <div className="form__tags">
              <label className="form__tag">
                <input
                  type="checkbox"
                  name="character"
                  value="aggressive"
                  className="form__checkbox-input"
                  defaultChecked={formValues.character.includes("aggressive")}
                />
                <span className="form__span">aggressive</span>
              </label>

              <label className="form__tag">
                <input
                  type="checkbox"
                  name="character"
                  value="calm"
                  className="form__checkbox-input"
                  defaultChecked={formValues.character.includes("calm")}
                />
                <span className="form__span">calm</span>
              </label>

              <label className="form__tag">
                <input
                  type="checkbox"
                  name="character"
                  value="playful"
                  className="form__checkbox-input"
                  defaultChecked={formValues.character.includes("playful")}
                />
                <span className="form__span">playful</span>
              </label>
            </div>

            <div className="form__ages-input">
              <label
                className={`form__subheading ${
                  errors.age ? "pet-form__error-message" : ""
                }`}
                htmlFor="gender"
              >
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
                    defaultChecked={formValues.age === "0-1"}
                  />
                  <label className="form__label" htmlFor="petAge1">
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
                    defaultChecked={formValues.age === "2-5"}
                  />
                  <label className="form__label" htmlFor="petAge2">
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
                    defaultChecked={formValues.age === "6-9"}
                  />
                  <label className="form__label" htmlFor="petAge3">
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
                    defaultChecked={formValues.age === "+10"}
                  />
                  <label className="form__label" htmlFor="petAge4">
                    +10 years
                  </label>
                </div>
              </div>
            </div>

            <div className="form__button-wrapper">
              <button className="form__button" type="submit">
                Next
              </button>
            </div>
          </section>
        </div>
      </form>
    </>
  );
}

export default Form;
