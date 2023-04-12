import { useState } from "react";
import Header from "../Header/Header";
import "./Tasks.scss";

function Tasks({ formValues, prevText, onPrev, onNext }) {
  const [errors, setErrors] = useState({});

  function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newValues = {
      tasks: formData.getAll("tasks"),
      notes: formData.get("notes"),
    };

    const errors = { tasks: newValues.tasks.length === 0 };

    if (Object.values(errors).some((value) => value)) {
      setErrors(errors);
    } else {
      onNext(newValues);
    }
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <Header heading="Tasks and Notes" prevText={prevText} onPrev={onPrev} />
        <h2
          className={`tasks__title-2 ${
            errors.tasks ? "pet-form__error-message" : ""
          }`}
        >
          Add daily tasks
        </h2>
        <ul className="tasks__list">
          <li className="tasks__list-item">
            <label className="tasks__label">
              <input
                type="checkbox"
                name="tasks"
                value="Grooming"
                className="tasks__input"
                defaultChecked={formValues.tasks.includes("Grooming")}
              />
              Grooming
            </label>
          </li>
          <li className="tasks__list-item">
            <label className="tasks__label">
              <input
                type="checkbox"
                name="tasks"
                value="Cage desinfecting"
                className="tasks__input"
                defaultChecked={formValues.tasks.includes("Cage desinfecting")}
              />
              Cage desinfecting
            </label>
          </li>
          <li className="tasks__list-item">
            <label className="tasks__label">
              <input
                type="checkbox"
                name="tasks"
                value="Eye cleaning"
                className="tasks__input"
                defaultChecked={formValues.tasks.includes("Eye cleaning")}
              />
              Eye cleaning
            </label>
          </li>
          <li className="tasks__list-item">
            <label className="tasks__label">
              <input
                type="checkbox"
                name="tasks"
                value="Walk"
                className="tasks__input"
                defaultChecked={formValues.tasks.includes("Walk")}
              />
              Walk
            </label>
          </li>
          {/* <li className="tasks__list-item">
            <label className="tasks__label">
              <input className="tasks__input" type="checkbox" name="task" />
              <input
                className="tasks__input--custom"
                type="text"
                placeholder="Custom..."
                name="custom"
              />
            </label>
          </li> */}
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
            defaultValue={formValues.notes}
          ></textarea>
        </div>
        <div className="form__button-wrapper">
          <button className="form__button" type="submit">
            Review
          </button>
        </div>
      </form>
    </div>
  );
}

export default Tasks;
