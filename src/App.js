import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Doctor from "./assets/dr2.png";
import Patient from "./assets/patient.png";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import EmailOutlined from "@mui/icons-material/EmailOutlined";
import LockIcon from "@mui/icons-material/Lock";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "./App.css";

function App() {

  const [showPassword, setShowPassword] = React.useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleImageClick = (id) => {
    setSelectedImage(id);
  };

  const avatarBox = (index, image) => {
    return (
      <div className={`imageBox ${selectedImage === index ? "selected" : ""}`}>
        <img src={image} alt="Image 1" />
        <p className="subTitle">{index === 0 ? "Doctor" : "Patient"}</p>
        {selectedImage === index && (
          <div className="overlay">
            <CheckCircleIcon color="primary" fontSize="large" />
          </div>
        )}
      </div>
    );
  };
  return (
    <div className="container">
      <h1 className="heading cb">Choose Account Type</h1>
      {/* Container for Images */}
      <div className="imageContainer">
        <div onClick={() => handleImageClick(0)}>{avatarBox(0, Doctor)}</div>
        <div onClick={() => handleImageClick(1)}>{avatarBox(1, Patient)}</div>
      </div>
      {/* Container for Subtitle */}
      <div className="textContainer">
        <span className="cg">
          Hello {selectedImage === 0 ? "doctor" : "patient"}!
        </span>
        <br />
        <span className="cg">
          Please fill out the form below to get started
        </span>
      </div>
      {/* Container for input fields */}
      <div className="formContainer">
        <TextField
          className="textField"
          id="outlined-basic"
          label="Email"
          placeholder="Email"
          variant="outlined"
          // autoComplete="off"
          // name="randomName"
          InputProps={{
            startAdornment: (
              <EmailOutlined className="mr5"  color="primary" />
            ),
          }}
        />
        <TextField
          type={showPassword ? "text" : "password"}
          className="textField"
          id="outlined-basic"
          label="Password"
          placeholder="Password"
          variant="outlined"
          autoComplete="off"
          InputProps={{
            startAdornment: (
              <LockIcon className="mr5" color="primary" />
            ),
            endAdornment: (
              <span
                className="ml5 cp"
                onClick={handleClickShowPassword}
              >
                {showPassword ? (
                  <VisibilityOff color="primary" />
                ) : (
                  <Visibility color="primary" />
                )}
              </span>
            ),
          }}
        />
      </div>
      {/* Container for Login and signup button */}
      <div className="signupLoginContainer">
        <p className="cg">
          No account? <span className="cb cp">Signup</span>
        </p>
        <button className="loginButton">Login</button>
      </div>{" "}
    </div>
  );
}

export default App;
