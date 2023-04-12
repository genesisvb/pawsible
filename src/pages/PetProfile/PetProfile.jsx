import { useNavigate, useParams } from "react-router-dom";
import "./PetProfile.scss";
import PetForm from "../../components/PetForm/PetForm";
import { uploadPhoto, updatePet } from "../../api";
import { useEffect, useState } from "react";
import { getPet } from "../../api";

function PetProfile() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [pet, setPet] = useState(null);

  useEffect(() => {
    getPet(id)
      .then((response) => {
        setPet(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  if (!pet) {
    return null;
  }

  const initFormValues = {
    photo: { url: pet.photoUrl, file: null },
    species: pet.species,
    name: pet.name,
    breed: pet.breed,
    gender: pet.gender,
    character: pet.character,
    age: pet.age,
    area: pet.area,
    tasks: pet.tasks,
    notes: pet.notes,
  };

  async function onComplete(formValues) {
    try {
      if (formValues.photo.file) {
        const photoUploadResponse = await uploadPhoto(formValues.photo.file);
        pet.photo = photoUploadResponse.data.filename;
      }

      pet.species = formValues.species;
      pet.name = formValues.name;
      pet.breed = formValues.breed;
      pet.gender = formValues.gender;
      pet.character = formValues.character;
      pet.age = formValues.age;
      pet.area = formValues.area;
      pet.tasks = formValues.tasks;
      pet.notes = formValues.notes;

      await updatePet(pet);
      alert("Pet profile updated successfully");
      navigate("/pets");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <PetForm
        initFormValues={initFormValues}
        onComplete={onComplete}
        newProfile={false}
      />
    </>
  );
}

export default PetProfile;
