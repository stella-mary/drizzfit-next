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
    return true; // Replace with your validation logic
  };

  return (
    <div>
      <div className={styles.PlaceOrderMobile}>Enter Mobile Number</div>
      <div className={styles.PlaceOrderText}>
        <TextField
          defaultValue="+91 | "
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
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
        <label className="checkboxLabel">
          <Checkbox
            checked={checked}
            onChange={handleChange} // Use the handleChange function here
            inputProps={{ "aria-label": "controlled" }}
            className={styles.checkboxInput}
          />
          Notify me for orders, updates & offers
        </label>
      </div>
      <div className={styles.PlaceOrderFooter}>
        <div className={styles.PlaceOrderButton} onClick={handleContinue}>
          Continue
          <span className={styles.space} />
          <EastIcon />
        </div>
      </div>
    </div>
  );
};

export default PlaceOrderMobile;
