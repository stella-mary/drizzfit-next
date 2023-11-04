import React from "react";
import styles from "@/styles/PlaceOrderStepper.module.css";
import CheckIcon from "@mui/icons-material/Check";

const PlaceOrderStepper = ({ activeStep }) => {
  return (
    <div className={styles["place-order-stepper"]}>
      <div className={activeStep === 1 ? styles.bgcolor1 : styles.disabled}>
        <span className={activeStep === 1 ? styles.bgcolor2 : styles.disabled}>
          {activeStep <= 1 ? 1 : <div className={styles.bgcolor3}><CheckIcon fontSize="5px" /></div>}
        </span>
        <span className={activeStep === 1 ? styles.title : styles.title1}>Mobile</span>
      </div>

      <div className={activeStep === 2 ? styles.disabled : styles.bgcolor1}  >
        <span className={activeStep === 2 ? styles.disabled : styles.bgcolor2}>
          {activeStep <= 2 ? 2 : <div className={styles.bgcolor3}><CheckIcon /></div>}
        </span>
        <span className={activeStep === 2 ? styles.title1 : styles.title}>Mobile</span>
      </div>

      <div className={activeStep === 3 ? styles.disabled : styles.bgcolor1}>
        <span className={activeStep === 3 ? styles.disabled : styles.bgcolor2}>
          {activeStep <= 3 ? 3 : <div className={styles.bgcolor3}><CheckIcon /></div>}
        </span>
        <span className={activeStep === 3 ? styles.title1 : styles.title}>Mobile</span>
      </div>
    </div >
  );
};

export default PlaceOrderStepper;
