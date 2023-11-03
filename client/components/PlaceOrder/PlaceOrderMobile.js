import React, { useState } from "react";
import styles from "@/styles/PlaceOrderMobile.module.css";
import TextField from "@mui/material/TextField";
import EastIcon from "@mui/icons-material/East";
import axios from "axios";

const PlaceOrderMobile = ({
  updateMobileNumber,
  selectedProduct,
  selectedQuantity,
  editedMobileNumber,
  setEditedMobileNumber,
  updateEditedMobileNumber,
  setCurrentStep1Part,
  setMobileNumber,
  mobileNumber,
}) => {
  const [isContinueButtonEnabled, setIsContinueButtonEnabled] = useState(false);

  const handleMobileNumberChange = (e) => {
    const newValue = e.target.value;
    setMobileNumber(newValue);

    if (mobileNumberIsValid(newValue)) {
      setCurrentStep1Part(2);
    }
  };

  const mobileNumberIsValid = (number) => {
    return /^\d{10}$/.test(number);
  };

  return (
    <div>
      <div className={styles.PlaceOrderMobile}>Enter Mobile Number</div>
      <div className={styles.PlaceOrderText}>
        <TextField
          value={mobileNumber}
          onChange={handleMobileNumberChange}
          inputProps={{
            maxLength: 18, // Including "+91 | "
            style: {
              width: "100%",
              borderRadius: "20px",
              borderColor: "#f0775a",
            },
          }}
          InputProps={{
            style: {
              color: "black",
            },
          }}
        />
      </div>
      <div className={styles.PlaceOrderFooter}>
        <div
          className={`${styles.PlaceOrderButton} ${
            !isContinueButtonEnabled ? styles.disabledButton : ""
          }`}
          // onClick={handleContinue}
          disabled={!isContinueButtonEnabled}
        >
          Continue
          <span className={styles.space} />
          <EastIcon />
        </div>
      </div>
    </div>
  );
};

export default PlaceOrderMobile;
