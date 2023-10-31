import React, { useState, useEffect } from "react";
import styles from "@/styles/PlaceOrderMobileOTP.module.css";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import EastIcon from "@mui/icons-material/East";
import axios from "axios";

const PlaceOrderMobileOTP = ({
  mobileNumber,
  updateMobileNumber,
  handleClick,
  handleGoToStep1,
  selectedProduct,
  selectedQuantity,
}) => {
  const [otp, setOTP] = useState(""); // State to store OTP
  const [isOTPVerified, setIsOTPVerified] = useState(false);
  const [isContinueButtonEnabled, setIsContinueButtonEnabled] = useState(false);

  const handleOTPChange = (e) => {
    const newValue = e.target.value;
    setOTP(newValue);
  };

  useEffect(() => {
    // Check if the OTP input is exactly 4 characters to enable the "Continue" button
    setIsContinueButtonEnabled(otp.length === 4);
  }, [otp]);

  const handleContinue = () => {
    if (isContinueButtonEnabled) {
      if (otp === "1234") {
        setIsOTPVerified(true); // Set OTP verification status to true
        handleClick(); // Continue to the next step
      } else {
        alert("Incorrect OTP. Please try again.");
      }
    } else {
      alert("Please enter a 4-digit OTP.");
    }
  };

  return (
    <div className={styles.PlaceOrderMobileOTP}>
      <div className={styles.h1}>Verify Mobile Number</div>
      <div className={styles.para}>
        Enter the OTP Sent to
      </div>
      <div className={styles.center}>
        <span className={styles.bgcolor}>
          {mobileNumber}
          <BorderColorIcon fontSize="16px" cursor="pointer" onClick={handleGoToStep1} />
        </span>
      </div>
      <div className={styles.otpInputContainer}>
        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={handleOTPChange}
          className={styles.otpInput}
        />
      </div>
      {/* <div className={styles.boxnote}>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
      </div>
      <div className={styles.center1}>Resend OTP in </div> */}
      <div className={styles.PlaceOrderFooter}>
        <div
          className={`${styles.PlaceOrderButton} ${!isContinueButtonEnabled ? styles.disabledButton : ""
            }`}
          onClick={handleContinue}
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

export default PlaceOrderMobileOTP;
