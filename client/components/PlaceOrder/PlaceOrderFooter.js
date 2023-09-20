import React, { useEffect, useState, useRef } from "react";
import styles from "@/styles/PlaceOrderFooter.module.css";
import EastIcon from "@mui/icons-material/East";

const PlaceOrderFooter = ({
  isContinueButtonEnabled,
  handleContinueButtonClick,
}) => {

  return (
    <div className={styles.PlaceOrderFooter}>
      <div
        className={
          isContinueButtonEnabled
            ? styles.PlaceOrderButton
            : styles.PlaceOrderButtonDisabled
        }
      >
        Continue<span className={styles.space} /><EastIcon />
      </div>
    </div>
  );
};

export default PlaceOrderFooter;
