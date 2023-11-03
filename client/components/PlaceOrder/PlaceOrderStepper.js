import React from "react";
import styles from "@/styles/PlaceOrderStepper.module.css";
import CheckIcon from "@mui/icons-material/Check";

const PlaceOrderStepper = ({ activeStep }) => {
  return (
    <div className={styles["place-order-stepper"]}>
      <div className={activeStep >= 1 ? styles.active : styles.step}>
        <span className={activeStep <= 1 ? styles.bgcolor : styles.checkIcon}>
          {activeStep <= 1 ? 1 : <CheckIcon />}
        </span>
        <span className={styles.space}></span>Mobile
      </div>
      <div className={activeStep >= 2 ? styles.disabled : styles.step}>
        <span className={activeStep <= 2 ? styles.bgcolor : styles.checkIcon}>
          {activeStep <= 2 ? 2 : <CheckIcon />}
        </span>
        <span className={styles.space}></span>Address
      </div>
      <div className={activeStep >= 3 ? styles.disabled : styles.step}>
        <span className={activeStep <= 3 ? styles.bgcolor : styles.checkIcon}>
          {activeStep <= 3 ? 3 : <CheckIcon />}
        </span>
        <span className={styles.space}></span>Payment
      </div>
    </div>
  );
};

export default PlaceOrderStepper;
