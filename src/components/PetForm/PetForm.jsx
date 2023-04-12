import "./PetForm.scss";
import Form from "../Form/Form";
import ShelterArea from "../ShelterArea/ShelterArea";
import Tasks from "../Tasks/Tasks";
import Review from "../Review/Review";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function PetForm({ initFormValues, onComplete, newProfile }) {
  const navigate = useNavigate();
  const [screen, setScreen] = useState(1);
  const [formValues, setFormValues] = useState(initFormValues);

  function saveNewFormValues(newValues) {
    setFormValues({ ...formValues, ...newValues });
  }

  if (newProfile) {
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
            headingText="New Pet Review"
            buttonText="Save Changes"
            prevText="Tasks"
            onPrev={() => setScreen(3)}
            onNext={() => onComplete(formValues)}
            onEditBasicInfo={() => setScreen(1)}
            onEditArea={() => setScreen(2)}
            onEditTasks={() => setScreen(3)}
            onEditNotes={() => setScreen(3)}
          />
        )}
      </>
    );
  }

  return (
    <>
      {screen === 1 && (
        <Review
          formValues={formValues}
          headingText="Profile"
          buttonText={null}
          prevText="Pets"
          onPrev={() => navigate("/pets")}
          onEditBasicInfo={() => setScreen(2)}
          onEditArea={() => setScreen(3)}
          onEditTasks={() => setScreen(4)}
          onEditNotes={() => setScreen(4)}
        />
      )}
      {screen === 2 && (
        <Form
          formValues={formValues}
          prevText="Profile"
          onPrev={() => setScreen(1)}
          onNext={(newFormValues) => {
            saveNewFormValues(newFormValues);
            setScreen(3);
          }}
        />
      )}
      {screen === 3 && (
        <ShelterArea
          formValues={formValues}
          prevText="Basic..."
          onPrev={() => setScreen(2)}
          onNext={(newFormValues) => {
            saveNewFormValues(newFormValues);
            setScreen(4);
          }}
        />
      )}
      {screen === 4 && (
        <Tasks
          formValues={formValues}
          prevText="Area"
          onPrev={() => setScreen(3)}
          onNext={(newFormValues) => {
            saveNewFormValues(newFormValues);
            setScreen(5);
          }}
        />
      )}
      {screen === 5 && (
        <Review
          formValues={formValues}
          headingText="Edit Pet Review"
          buttonText="Save Changes"
          prevText="Tasks"
          onPrev={() => setScreen(4)}
          onNext={() => onComplete(formValues)}
          onEditBasicInfo={() => setScreen(2)}
          onEditArea={() => setScreen(3)}
          onEditTasks={() => setScreen(4)}
          onEditNotes={() => setScreen(4)}
        />
      )}
    </>
  );
}

export default PetForm;
