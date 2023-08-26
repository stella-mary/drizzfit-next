// import React from 'react'
// import styles from "@/styles/BuyLeft.module.css"

// const BuyLeft = () => {
//     return (

//         <div className={styles.buyLeft}>
//             <div className={styles.para}>
//                 Returning customer? <span className={styles.paraColor}>Click here to login</span>
//             </div>

//         </div>
//     )
// }

// export default BuyLeft

import React, { useState } from "react";

// Material UI Imports
import {
  TextField,
  InputAdornment,
  FormControl,
  InputLabel,
  IconButton,
  Button,
  Input,
  Checkbox,
  Alert,
  Stack,
} from "@mui/material";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";

// Material UI Icon Imports
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LoginIcon from "@mui/icons-material/Login";
import { useRouter } from "next/router";

// Validations

// Email Validation
const isEmail = (email) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

export default function Login() {
  const [showPassword, setShowPassword] = React.useState(false);

  const router = useRouter();

  const navigateToLogin = () => {
    console.log("Navigating to login page...");
    router.push("./Buy/Login");
  };

  //Inputs
  const [userNameInput, setUserNameInput] = useState();
  const [emailInput, setEmailInput] = useState();
  const [passwordInput, setPasswordInput] = useState();

  // Inputs Errors
  const [usernameError, setUsernameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  // Overall Form Validity
  const [formValid, setFormValid] = useState();
  const [success, setSuccess] = useState();

  // Handles Display and Hide Password
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // Label for Checkbox
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  // Validation for onBlur Username
  const handleUsername = () => {
    if (!userNameInput) {
      setUsernameError(true);
      return;
    }

    setUsernameError(false);
  };

  // Validation for onBlur Email
  const handleEmail = () => {
    console.log(isEmail(emailInput));
    if (!isEmail(emailInput)) {
      setEmailError(true);
      return;
    }

    setEmailError(false);
  };

  // Validation for onBlur Password
  const handlePassword = () => {
    if (
      !passwordInput ||
      passwordInput.length < 5 ||
      passwordInput.length > 20
    ) {
      setPasswordError(true);
      return;
    }

    setPasswordError(false);
  };

  //handle Submittion
  const handleSubmit = () => {
    setSuccess(null);
    //First of all Check for Errors

    // IF username error is true
    if (usernameError || !userNameInput) {
      setFormValid(
        "Username is set btw 5 - 15 characters long. Please Re-Enter"
      );
      return;
    }

    // If Email error is true
    if (emailError || !emailInput) {
      setFormValid("Email is Invalid. Please Re-Enter");
      return;
    }

    // If Password error is true
    if (passwordError || !passwordInput) {
      setFormValid(
        "Password is set btw 5 - 20 characters long. Please Re-Enter"
      );
      return;
    }
    setFormValid(null);

    // Proceed to use the information passed
    console.log("Username : " + userNameInput);
    console.log("Email : " + emailInput);
    console.log("Password : " + passwordInput);

    //Show Successfull Submittion
    setSuccess("Form Submitted Successfully");
  };

  return (
    <div style={{ padding: "20px" }}>
      <div style={{ marginTop: "10px" }}>
        <TextField
          error={usernameError}
          label="Username"
          id="standard-basic"
          variant="standard"
          sx={{ width: "100%", marginTop: "10px" }}
          size="small"
          value={userNameInput}
          InputProps={{}}
          onChange={(event) => {
            setUserNameInput(event.target.value);
          }}
          onBlur={handleUsername}
          InputLabelProps={{
            style: {
              color: "white",
              fontSize: "18px",
              fontFamily: "'Telegraf Regular 400', sans-serif",
            },
          }}
        />
      </div>
      <div style={{ marginTop: "5px" }}>
        <TextField
          label="Email Address"
          fullWidth
          error={emailError}
          id="standard-basic"
          variant="standard"
          sx={{ width: "100%", marginTop: "10px", marginBottom: "10px" }}
          value={emailInput}
          InputProps={{}}
          size="small"
          onBlur={handleEmail}
          onChange={(event) => {
            setEmailInput(event.target.value);
          }}
          InputLabelProps={{
            style: {
              color: "white",
              fontSize: "18px",
              fontFamily: "'Telegraf Regular 400', sans-serif",
            }, // Apply white color to the label
          }}
        />
      </div>
      <div style={{ marginTop: "5px" }}>
        <FormControl sx={{ width: "100%" }} variant="standard">
          <InputLabel
            error={passwordError}
            htmlFor="standard-adornment-password"
            style={{
              color: "white",
              borderColor: "white",
              fontSize: "18px",
              fontFamily: "'Telegraf Regular 400', sans-serif",
            }}
          >
            Password
          </InputLabel>
          <Input
            error={passwordError}
            onBlur={handlePassword}
            id="standard-adornment-password"
            style={{ color: "white" }}
            type={showPassword ? "text" : "password"}
            onChange={(event) => {
              setPasswordInput(event.target.value);
            }}
            value={passwordInput}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </div>
      <div style={{ marginTop: "40px" }}>
        <Button
          variant="contained"
          fullWidth
          startIcon={<LoginIcon />}
          onClick={handleSubmit}
          sx={{
            fontFamily: "'Telegraf UltraBold 800', sans-serif",
            fontSize: "16px", // Replace with your desired font size
          }}
        >
          REGISTER
        </Button>
      </div>
      {/* Show Form Error if any */}
      {formValid && (
        <Stack sx={{ width: "100%", paddingTop: "10px" }} spacing={2}>
          <Alert severity="error" size="small">
            {formValid}
          </Alert>
        </Stack>
      )}
      {/* Show Success if no issues */}
      {success && (
        <Stack sx={{ width: "100%", paddingTop: "10px" }} spacing={2}>
          <Alert severity="success" size="small">
            {success}
          </Alert>
        </Stack>
      )}
      <div
        style={{
          marginTop: "30px",
          fontSize: "15px",
          color: "white",
          fontFamily: "'Telegraf Regular 400', sans-serif",
        }}
        margin="left"
      >
        <a>Forgot Password</a>
        <br />
        Do you have an account ?{" "}
        <small
          onClick={navigateToLogin}
          style={{ textDecoration: "underline", color: "blue" }}
        >
          Login
        </small>
      </div>
    </div>
  );
}
