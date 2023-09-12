import React from "react";
import styles from "@/styles/BuyRight.module.css";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import axios from "axios";

const BuyOrder = () => {
  return (
    <div className={styles.BuyRightContainer}>
      <div className={styles.h1}>3000+ Happy Customers</div>
      <div className={styles.h2}>Got an amazing result</div>
      <div className={styles.rating}>
        <Stack spacing={1}>
          <Rating name="size-large" defaultValue={2} size="large" />
        </Stack>
      </div>
      <div className={styles.para}>
        Its a very effective medicine. You will get good results if you take it
        continuously for 3 months.
      </div>
      <div className={styles.customer}>Lalith Kumar</div>
    </div>
  );
};

export default BuyOrder;
