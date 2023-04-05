import "./PhotoUpload.scss";
import dogPic from "../../assets/images/dog-pic.svg";

function PhotoUpload() {
  return (
    <div className="photo-upload">
      <p className="photo-upload__text">
        Step 1: Tap below to upload a picture
      </p>
      <div className="photo-upload__img-container">
        <img className="photo-upload__img" src={dogPic} alt="dog" />
      </div>
    </div>
  );
}

export default PhotoUpload;
