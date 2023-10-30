import React, { useState } from "react";
import styles from "@/styles/PlaceOrderMobile.module.css";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import EastIcon from "@mui/icons-material/East";
import axios from "axios";

const PlaceOrderMobile = ({
  updateMobileNumber,
  selectedProduct,
  selectedQuantity,
}) => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [checked, setChecked] = React.useState(true);
  const [isContinueButtonEnabled, setIsContinueButtonEnabled] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleContinue = () => {
    if (mobileNumberIsValid()) {
      updateMobileNumber(mobileNumber);
      axios
        .post("http://localhost:1992/customer/add", {
          phoneNumber: mobileNumber,
        })
        .then((response) => {
          console.log("Customer Response: ", response.data),
            axios
              .post("http://localhost:1992/order/add", {
                customerId: response.data.customerId,
                orderDate: new Date(),
                status: "Add to Cart",
              })
              .then((res) => {
                console.log("Order Response: ", res.data),
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
    // Implement your validation logic here
    // For example, check if mobileNumber is a 10-digit number
    return /^\d{10}$/.test(mobileNumber);
  };


  // Function to handle changes in the TextField
  const handleMobileNumberChange = (e) => {
    const newValue = e.target.value;
    setMobileNumber(newValue);
    setIsContinueButtonEnabled(mobileNumberIsValid());

  };

  return (
    <div>
      <div className={styles.PlaceOrderMobile}>Enter Mobile Number</div>
      <div className={styles.PlaceOrderText}>
        <TextField
          defaultValue=" "
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
      <div className={styles.PlaceOrderNote}>
        {/* <label className="checkboxLabel">
          <Checkbox
            checked={checked}
            onChange={handleChange} // Use the handleChange function here
            inputProps={{ "aria-label": "controlled" }}
            className={styles.checkboxInput}
          />
          Notify me for orders, updates & offers
        </label> */}
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
