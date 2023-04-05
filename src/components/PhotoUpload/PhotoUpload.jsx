import "./PhotoUpload.scss";
import Form from "../Form/Form.jsx";

function PhotoUpload() {
  return (
    <>
      <div className="photo-upload">
        <p className="photo-upload__text">
          Step 1: Tap below to upload a picture
        </p>
        <div className="photo-upload__img-container"></div>
      </div>
      <Form />
    </>
  );
}

export default PhotoUpload;
