import "./HomePage.scss";
import avatar from "../../assets/images/avatar.jpeg";
import catPhoto from "../../assets/images/cat.jpeg";
import intakeIcon from "../../assets/images/icons/Vector.svg";
import inventoryIcon from "../../assets/images/icons/intake.svg";
import tasksIcon from "../../assets/images/icons/Vector-3.svg";
import contactsIcon from "../../assets/images/icons/Vector-2.svg";
import arrowRight from "../../assets/images/icons/arrow-right.svg";
import borderCollie from "../../assets/images/border-collie.svg";
import notifications from "../../assets/images/icons/notifications.svg";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <header className="header">
        <div className="header__wrapper">
          <p className="header__date">13th April 2023</p>
          <p className="header__greeting">Hi Genesis!</p>
        </div>
        <div className="header__avatar-wrapper">
          <img className="header__avatar" src={avatar} alt="avatar" />
        </div>
      </header>
      <section className="section">
        <div className="section__image">
          <img src={catPhoto} alt="cat image" />
        </div>
        <div>
          <h1 className="section__title">Select the category</h1>
          <div className="section__categories">
            <div className="section__icons">
              <Link to="/pets/new">
                <img
                  className="section__icon"
                  src={intakeIcon}
                  alt="intake icon"
                />
              </Link>
              <p className="section__icon-description">Intake</p>
            </div>

            <div className="section__icons">
              <img
                className="section__icon"
                src={inventoryIcon}
                alt="inventory icon"
              />
              <p className="section__icon-description">Inventory</p>
            </div>

            <div className="section__icons">
              <img className="section__icon" src={tasksIcon} alt="tasks icon" />
              <p className="section__icon-description">Tasks</p>
            </div>

            <div className="section__icons">
              <img
                className="section__icon"
                src={contactsIcon}
                alt="contacts icon"
              />
              <p className="section__icon-description">Contacts</p>
            </div>
          </div>
        </div>
        <div className="tasks">
          <h2 className="tasks__title">Tasks for today</h2>
          <div className="tasks__link-wrapper">
            <p className="tasks__link">Show all</p>
            <img
              className="tasks__link-icon"
              src={arrowRight}
              alt="arrow right icon"
            />
          </div>
        </div>
        <div className="tasks__big-container">
          <div className="tasks__image-container">
            <div className="tasks__image-wrapper">
              <img className="tasks__image" src={borderCollie} alt="dog" />
              <img
                className="tasks__notification"
                src={notifications}
                alt="notifications"
              />
            </div>
            <div className="tasks__image-wrapper">
              <img className="tasks__image" src={borderCollie} alt="dog" />
              <img
                className="tasks__notification"
                src={notifications}
                alt="notifications"
              />
            </div>
            <div className="tasks__image-wrapper">
              <img className="tasks__image" src={borderCollie} alt="dog" />
              <img
                className="tasks__notification"
                src={notifications}
                alt="notifications"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default HomePage;
