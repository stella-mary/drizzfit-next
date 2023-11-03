import React, { useState, useEffect } from "react";
import styles from "@/styles/PlaceOrderMobileOTP.module.css";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import EastIcon from "@mui/icons-material/East";
import axios from "axios";

const PlaceOrderMobileOTP = ({
  mobileNumber,
  handleClick,
  handleEdit,
  setCurrentStep1Part,
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
    setIsContinueButtonEnabled(otp.length === 4);
  }, [otp]);

  const handleSubmit = () => {
    axios
      .post("http://localhost:1992/customer/add", {
        phoneNumber: mobileNumber,
      })
      .then((response) => {
        console.log("Customer Response: ", response.data);
        axios
          .post("http://localhost:1992/order/add", {
            customerId: response.data.customerId,
            orderDate: new Date(),
            status: "Add to Cart",
          })
          .then((res) => {
            console.log("Order Response: ", res.data);
            axios
              .post("http://localhost:1992/orderitem/add", {
                orderId: res.data.orderId,
                productId: selectedProduct.productId,
                quantity: selectedQuantity,
                priceAtOrder: selectedProduct.price,
              })
              .then((response) =>
                console.log("OrderItem Response: ", response.data)
              );
          });
      });
  };

  const handleContinue = () => {
    if (isContinueButtonEnabled) {
      if (otp === "1234") {
        setIsOTPVerified(true); // Set OTP verification status to true
        handleSubmit();
        handleClick(); // Continue to the next step
      } else {
        alert("Incorrect OTP. Please try again.");
      }
    } else {
      alert("Please enter OTP.");
    }
  };

  return (
    <div className={styles.PlaceOrderMobileOTP}>
      <div className={styles.h1}>Verify Mobile Number</div>
      <div className={styles.para}>Enter the OTP Sent to</div>
      <div className={styles.center}>
        <span className={styles.bgcolor}>
          {mobileNumber}
          <BorderColorIcon
            fontSize="16px"
            cursor="pointer"
            onClick={() => setCurrentStep1Part(1)}
          />
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
      <div className={styles.PlaceOrderFooter}>
        <div
          className={`${styles.PlaceOrderButton} ${
            !isContinueButtonEnabled ? styles.disabledButton : ""
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
