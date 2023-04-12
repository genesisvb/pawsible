import "./PetListPage.scss";
import { useEffect, useState } from "react";
import { getPets } from "../../api";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";

function PetListPage() {
  const navigate = useNavigate();
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

  return (
    <section>
      <Header
        heading="Pets"
        prevText="Home"
        onPrev={() => {
          navigate("/");
        }}
      />

      <ul className="pet-list">
        {pets.map((pet) => (
          <li key={pet.id} className="pet-list__item">
            <div className="pet-list__image-wrapper">
              <img className="pet-list__image" src={pet.photoUrl} alt="pet" />
            </div>
            <div className="pet-list__info">
              <h2 className="pet-list__name">{pet.name}</h2>
              <ul className="pet-list__tasks">
                {pet.tasks.map((task) => (
                  <li key={`${pet.id}${task}`} className="pet-list__task">
                    {task}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default PetListPage;
