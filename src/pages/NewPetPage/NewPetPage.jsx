import { useNavigate } from "react-router-dom";
import "./NewPetPage.scss";
import PetForm from "../../components/PetForm/PetForm";
import { uploadPhoto, createPet } from "../../api";

function NewPetPage() {
  const navigate = useNavigate();

  const initFormValues = {
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
  };

  async function onComplete(formValues) {
    try {
      const photoUploadResponse = await uploadPhoto(formValues.photo.file);

      await createPet({
        photo: photoUploadResponse.data.filename,
        species: formValues.species,
        name: formValues.name,
        breed: formValues.breed,
        gender: formValues.gender,
        character: formValues.character,
        age: formValues.age,
        area: formValues.area,
        tasks: formValues.tasks,
        notes: formValues.notes,
      });

      alert("Pet profile created successfully");
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <PetForm
        initFormValues={initFormValues}
        onComplete={onComplete}
        newProfile={true}
      />
    </>
  );
}

export default NewPetPage;
