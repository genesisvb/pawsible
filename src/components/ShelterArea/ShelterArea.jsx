import Header from "../Header/Header";
import "./ShelterArea.scss";
import quarantineIcon from "../../assets/images/icons/quarantine-transparent.svg";
import playroomIcon from "../../assets/images/icons/pet-toy.svg";
import autoimmuneIcon from "../../assets/images/icons/vet-check.svg";
import kennelIcon from "../../assets/images/icons/kennel.svg";
import { Link } from "react-router-dom";

function ShelterArea() {
  return (
    <div>
      <Header />
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
                type="checkbox"
                name="checkbox1"
                value="Quarantine"
                className="shelter-area__checkbox-input"
              />
              <span className="shelter-area__span">Quarantine</span>
            </label>
          </div>

          <div className="shelter-area__tags">
            <label className="shelter-area__tag">
              <img src={playroomIcon} alt="Play room icon" />
              <input
                type="checkbox"
                name="checkbox2"
                value="playRoom"
                className="shelter-area__checkbox-input"
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
                type="checkbox"
                name="checkbox3"
                value="autoimmune"
                className="shelter-area__checkbox-input"
              />
              <span className="shelter-area__span">Autoimmune</span>
            </label>
          </div>

          <div className="shelter-area__tags">
            <label className="shelter-area__tag">
              <img src={kennelIcon} alt="quarantine icon" />
              <input
                type="checkbox"
                name="checkbox4"
                value="soloKennel"
                className="shelter-area__checkbox-input"
              />
              <span className="shelter-area__span">Solo Kennel</span>
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
  );
}

export default ShelterArea;
