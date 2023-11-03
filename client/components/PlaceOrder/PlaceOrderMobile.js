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
}) => {
  const [mobileNumber, setMobileNumber] = useState(editedMobileNumber || "");

  const [isContinueButtonEnabled, setIsContinueButtonEnabled] = useState(false);

  const handleContinue = () => {
    if (mobileNumberIsValid()) {
      updateMobileNumber(mobileNumber);
      updateMobileNumber(editedMobileNumber);
      console.log("Updated Mobile Number: " + mobileNumber);
      // updateEditedMobileNumber(editedMobileNumber);
      console.log("EditedMobileNumber: " + editedMobileNumber);

      axios
        .post("http://localhost:1992/customer/add", {
          phoneNumber: mobileNumber || editedMobileNumber
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
    }
  };

  const mobileNumberIsValid = () => {
    return /^\d{10}$/.test(mobileNumber);
  };

  const handleMobileNumberChange = (e) => {
    const newValue = e.target.value;
    setMobileNumber(newValue);
    setEditedMobileNumber(newValue)
    // updateEditedMobileNumber(newValue);
    console.log("Updated Mobile Number: " + newValue);
    setIsContinueButtonEnabled(mobileNumberIsValid());
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

export default PlaceOrderMobile;
