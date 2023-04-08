import Header from "../Header/Header";
import "./Tasks.scss";
import { Link } from "react-router-dom";

function Tasks() {
  return (
    <div>
      <Header />
      <h2 className="tasks__title-2">Add daily tasks</h2>
      <ul className="tasks__list">
        <li className="tasks__list-item">
          <label className="tasks__label" htmlFor="grooming">
            <input className="tasks__input" type="checkbox" />
            Grooming
          </label>
        </li>
        <li className="tasks__list-item">
          <label className="tasks__label" htmlFor="cageDesinfecting">
            <input className="tasks__input" type="checkbox" />
            Cage desinfecting
          </label>
        </li>
        <li className="tasks__list-item">
          <label className="tasks__label" htmlFor="eyeCleaning">
            <input className="tasks__input" type="checkbox" />
            Eye cleaning
          </label>
        </li>
        <li className="tasks__list-item">
          <label className="tasks__label" htmlFor="walk">
            <input className="tasks__input" type="checkbox" />
            Walk
          </label>
        </li>
        <li className="tasks__list-item">
          <label className="tasks__label" htmlFor="custom">
            <input className="tasks__input" type="checkbox" />
            <input
              className="tasks__input--custom"
              type="text"
              placeholder="Custom..."
            />
          </label>
        </li>
      </ul>
      <div className="tasks__notes">
        <label className="tasks__heading" htmlFor="notes">
          Notes
        </label>
        <textarea
          className="tasks__textarea"
          name="notes"
          id="notes"
          placeholder="What else should we know?"
        ></textarea>
      </div>
      <div className="form__button-wrapper">
        <Link to="/review" className="form__button">
          Review
        </Link>
      </div>
    </div>
  );
}

export default Tasks;
