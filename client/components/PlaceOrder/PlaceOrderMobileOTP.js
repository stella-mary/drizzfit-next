import React, { useState } from "react";
import styles from "@/styles/PlaceOrderMobileOTP.module.css";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import EastIcon from "@mui/icons-material/East";
import axios from "axios";

const PlaceOrderMobileOTP = ({
  mobileNumber,
  updateMobileNumber,
  handleClick,
  selectedProduct,
  selectedQuantity,
}) => {
  const [otp, setOTP] = useState(""); // State to store OTP
  const [isOTPVerified, setIsOTPVerified] = useState(false);

  const handleOTPChange = (e) => {
    const newValue = e.target.value;
    setOTP(newValue);
  };

  const handleContinue = () => {
    // You should implement your OTP verification logic here.
    // For now, we'll check if the entered OTP is "1234" for demonstration purposes.
    if (otp === "1234") {
      setIsOTPVerified(true); // Set OTP verification status to true
      handleClick(); // Continue to the next step
    } else {
      // Handle incorrect OTP (e.g., display an error message)
      alert("Incorrect OTP. Please try again.");
    }
  };

  return (
    <div className={styles.PlaceOrderMobileOTP}>
      <div className={styles.h1}>Verify Mobile Number</div>
      <div className={styles.para}>
        To Use Your Saved Address, Enter the OTP Sent to
      </div>
      <div className={styles.center}>
        <span className={styles.bgcolor}>
          {mobileNumber} <BorderColorIcon fontSize="16px" />
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
          className={styles.PlaceOrderButton}
          onClick={handleContinue}
          disabled={isOTPVerified || otp.length !== 4}
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
