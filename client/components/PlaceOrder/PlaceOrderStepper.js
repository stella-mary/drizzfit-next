import React from "react";
import styles from "@/styles/PlaceOrderStepper.module.css";
import CheckIcon from "@mui/icons-material/Check"; // Import the closed-tick icon

const PlaceOrderStepper = ({ activeStep }) => {
  return (
    <div className={styles["place-order-stepper"]}>
      <div className={activeStep >= 1 ? styles.active : styles.step}>
        <span className={styles.bgcolor}>{activeStep <= 1 ? 1 : <CheckIcon />}</span>
        <span className={styles.space}></span>Mobile
      </div>
      <div className={activeStep >= 2 ? styles.active : styles.step}>
        <span className={styles.bgcolor}>{activeStep <= 2 ? 2 : <CheckIcon />}</span>
        <span className={styles.space}></span>Address
      </div>
      <div className={activeStep >= 3 ? styles.active : styles.step}>
        <span className={styles.bgcolor}>{activeStep <= 3 ? 3 : <CheckIcon />}</span>
        <span className={styles.space}></span>Payment
      </div>
    </div>
  );
};

export default PlaceOrderStepper;
