import "./HomePage.scss";
import avatar from "../../assets/images/avatar.jpeg";
import intakeIcon from "../../assets/images/icons/Vector.svg";
import inventoryIcon from "../../assets/images/icons/intake.svg";
import tasksIcon from "../../assets/images/icons/Vector-3.svg";
import contactsIcon from "../../assets/images/icons/Vector-2.svg";
import arrowRight from "../../assets/images/icons/arrow-right.svg";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPets } from "../../api";

function HomePage() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    getPets()
      .then((response) => {
        setPets(response.data.reverse());
      })
      .catch((err) => console.log(err));
  }, []);

  if (pets.length === 0) {
    return null;
  }

  const randomPet = pets[Math.floor(Math.random() * pets.length)];

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
        <div className="section__image-wrapper">
          <img className="section__image" src={randomPet.photoUrl} alt="pet" />
          <p className="section__pet-name">{randomPet.name}</p>
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
          <h2 className="tasks__title">Recently added</h2>
          <div className="tasks__link-wrapper">
            <Link to="/pets" className="tasks__link">
              Show all
              <img
                className="tasks__link-icon"
                src={arrowRight}
                alt="arrow right icon"
              />
            </Link>
          </div>
        </div>
        <div className="tasks__big-container">
          <div className="tasks__image-container">
            {pets.slice(0, 5).map((pet) => (
              <div key={pet.id} className="tasks__image-wrapper">
                <Link to={`/pets/${pet.id}`}>
                  <img className="tasks__image" src={pet.photoUrl} alt="pet" />
                  <p className="tasks__pet-name">{pet.name}</p>
                  <div className="tasks__notification">{pet.tasks.length}</div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default HomePage;
