import Header from "../Header/Header";
import "./ShelterArea.scss";
import quarantineIcon from "../../assets/images/icons/quarantine-transparent.svg";
import playroomIcon from "../../assets/images/icons/pet-toy.svg";
import autoimmuneIcon from "../../assets/images/icons/vet-check.svg";
import kennelIcon from "../../assets/images/icons/kennel.svg";

function ShelterArea({ formValues, prevText, onPrev, onNext }) {
  function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newValues = {
      area: formData.get("area"),
    };

    onNext(newValues);
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <Header heading="Shelter Area" prevText={prevText} onPrev={onPrev} />
        <div>
          <h2 className="shelter-area__title">
            Choose the area within the shelter
          </h2>
        </div>

        <div className="shelter-area__main-wrapper">
          <div className="shelter-area__tag-wrapper">
            <div className="shelter-area__tags">
              <label className="shelter-area__tag">
                <img
                  className="shelter-area__icon"
                  src={quarantineIcon}
                  alt="quarantine icon"
                />
                <input
                  type="radio"
                  name="area"
                  value="Quarantine"
                  className="shelter-area__checkbox-input"
                  defaultChecked={formValues.area === "Quarantine"}
                />
                <span className="shelter-area__span">Quarantine</span>
              </label>
            </div>

            <div className="shelter-area__tags">
              <label className="shelter-area__tag">
                <img src={playroomIcon} alt="Play room icon" />
                <input
                  type="radio"
                  name="area"
                  value="Play Room"
                  className="shelter-area__checkbox-input"
                  defaultChecked={formValues.area === "Play Room"}
                />
                <span className="shelter-area__span">Play Room</span>
              </label>
            </div>
          </div>

          <div className="shelter-area__tag-wrapper">
            <div className="shelter-area__tags">
              <label className="shelter-area__tag">
                <img src={autoimmuneIcon} alt="quarantine icon" />
                <input
                  type="radio"
                  name="area"
                  value="Autoimmune"
                  className="shelter-area__checkbox-input"
                  defaultChecked={formValues.area === "Autoimmune"}
                />
                <span className="shelter-area__span">Autoimmune</span>
              </label>
            </div>

            <div className="shelter-area__tags">
              <label className="shelter-area__tag">
                <img src={kennelIcon} alt="quarantine icon" />
                <input
                  type="radio"
                  name="area"
                  value="Solo Kennel"
                  className="shelter-area__checkbox-input"
                  defaultChecked={formValues.area === "Solo Kennel"}
                />
                <span className="shelter-area__span">Solo Kennel</span>
              </label>
            </div>
          </div>
        </div>
        <div className="form__button-wrapper">
          <button className="form__button" type="submit">
            Next
          </button>
        </div>
      </form>
    </div>
  );
}

export default ShelterArea;
