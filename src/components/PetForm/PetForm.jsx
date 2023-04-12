import "./PetForm.scss";
import Form from "../Form/Form";
import ShelterArea from "../ShelterArea/ShelterArea";
import Tasks from "../Tasks/Tasks";
import Review from "../Review/Review";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function PetForm() {
  const navigate = useNavigate();
  const [screen, setScreen] = useState(1);
  const [formValues, setFormValues] = useState({
    photo: { url: "", file: null },
    species: null,
    name: "",
    breed: "",
    gender: null,
    character: [],
    age: null,
    area: null,
    tasks: [],
    notes: "",
    image: {},
  });

  function saveNewFormValues(newValues) {
    setFormValues({ ...formValues, ...newValues });
  }

  return (
    <>
      {screen === 1 && (
        <Form
          formValues={formValues}
          prevText="Home"
          onPrev={() => navigate("/")}
          onNext={(newFormValues) => {
            saveNewFormValues(newFormValues);
            setScreen(2);
          }}
        />
      )}
      {screen === 2 && (
        <ShelterArea
          formValues={formValues}
          prevText="Basic..."
          onPrev={() => setScreen(1)}
          onNext={(newFormValues) => {
            saveNewFormValues(newFormValues);
            setScreen(3);
          }}
        />
      )}
      {screen === 3 && (
        <Tasks
          formValues={formValues}
          prevText="Area"
          onPrev={() => setScreen(2)}
          onNext={(newFormValues) => {
            saveNewFormValues(newFormValues);
            setScreen(4);
          }}
        />
      )}
      {screen === 4 && (
        <Review
          formValues={formValues}
          prevText="Tasks"
          onPrev={() => setScreen(3)}
          onNext={() => alert("save!")}
          onEditBasicInfo={() => setScreen(1)}
          onEditArea={() => setScreen(2)}
          onEditTasks={() => setScreen(3)}
          onEditNotes={() => setScreen(3)}
        />
      )}
    </>
  );
}

export default PetForm;
