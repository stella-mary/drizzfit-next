import React from "react";
import styles from "@/styles/PlaceOrderStepper.module.css";
import CheckIcon from "@mui/icons-material/Check";

const PlaceOrderStepper = ({ activeStep }) => {
  return (
    <div className={styles["place-order-stepper"]}>
      <div className={activeStep >= 1 ? styles.disabled : <span className={styles.bgcolor} />}>
        <span className={activeStep <= 1 ? styles.bgcolor1 : styles.checkIcon}>
          {activeStep <= 1 ? 1 : <CheckIcon />}
        </span>
        <span className={styles.space}></span>
        <span className={activeStep <= 1 ? styles.title : styles.title1}>Mobile</span>
      </div>
      <div className={activeStep >= 2 ? styles.disabled : <span className={styles.bgcolor} />}>
        <span className={activeStep <= 2 ? styles.bgcolor1 : styles.checkIcon}>
          {activeStep <= 2 ? 2 : <CheckIcon />}
        </span>
        <span className={styles.space}></span>
        <span className={activeStep <= 2 ? styles.title : ''}>Address</span>
      </div>
      <div className={activeStep >= 3 ? styles.disabled : <span className={styles.bgcolor} />}>
        <span className={activeStep <= 3 ? styles.bgcolor1 : styles.checkIcon}>
          {activeStep <= 3 ? 3 : <CheckIcon />}
        </span>
        <span className={styles.space}></span>
        <span className={activeStep <= 3 ? styles.title : ''}>Payment</span>
      </div>
    </div >
  );
};

export default PlaceOrderStepper;
