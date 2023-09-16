import React from "react";
import styles from "@/styles/PlaceOrderStepper.module.css";

const PlaceOrderStepper = ({ activeStep }) => {
  return (
    <div className={styles["place-order-stepper"]}>
      <div className={activeStep == 1 ? styles.active : styles.step}>
        <span className={styles.bgcolor}>1</span>
        <span className={styles.space}></span>Mobile
      </div>
      <div className={activeStep == 2 ? styles.active : styles.step}>
        <span className={styles.bgcolor}>2</span>
        <span className={styles.space}></span>Address
      </div>
      <div className={activeStep == 3 ? styles.active : styles.step}>
        <span className={styles.bgcolor}>3</span>
        <span className={styles.space}></span>Payment
      </div>
    </div>
  );
};

export default PlaceOrderStepper;
