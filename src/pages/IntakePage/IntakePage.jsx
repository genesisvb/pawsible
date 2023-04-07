import "./IntakePage.scss";
import PhotoUpload from "../../components/PhotoUpload/PhotoUpload";
import { useState } from "react";
import Header from "../../components/Header/Header";
import Form from "../../components/Form/Form";

function IntakePage() {
  const [image, setImage] = useState({ preview: "", data: "" });
  const [status, setStatus] = useState("");
  // const api = "http://localhost:5000";

  const handleSubmit = async (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append("file", image.data);
    const response = await fetch("http://localhost:5000/public/image", {
      method: "POST",
      body: formData,
    });
    if (response) setStatus(response.statusText);
  };

  const handleFileChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    };
    setImage(img);
  };
  return (
    <>
      <Header />
      <PhotoUpload />
      <form
        acttion="/profile"
        method="post"
        enctype="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <div className="photo-upload__img-container">
          {image.preview && (
            <img className="photo-upload__img" alt="pet" src={image.preview} />
          )}
          <input
            type="file"
            name="petPhoto"
            onChange={handleFileChange}
          ></input>
        </div>
        <Form />
      </form>
    </>
  );
}

export default IntakePage;
