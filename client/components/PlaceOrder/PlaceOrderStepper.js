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

      <div className={activeStep === 1 ? styles.bgcolor1 : styles.disabled}>
        <span className={activeStep === 2 ? styles.disabled : ''}>

          <span className={activeStep === 2 ? styles.bgcolor2 : activeStep === 1 ? styles.disabled1 : styles.bgcolor3}>
            {activeStep === 1 ? "2" : <CheckIcon fontSize="5px" />}
          </span>

          {/* {activeStep <= 2 ? 2 : <div className={styles.bgcolor3}><CheckIcon fontSize="5px" /></div>} */}
        </span>
        <span className={activeStep === 2 ? styles.title : activeStep === 1 ? styles.disabled : styles.title1}>Mobile</span>

      </div>

      <div className={activeStep === 1 ? styles.bgcolor1 : styles.disabled}>
        <span className={activeStep === 3 ? styles.bgcolor2 : styles.disabled}>
          {activeStep <= 3 ? 3 : <div className={styles.bgcolor3}><CheckIcon fontSize="5px" /></div>}
        </span>
        <span className={activeStep === 3 ? styles.title : styles.disabled}>Mobile</span>
      </div>
    </div >
  );
};

export default PlaceOrderStepper;
