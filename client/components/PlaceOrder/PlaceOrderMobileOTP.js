import React from "react";
import styles from "@/styles/PlaceOrderMobileOTP.module.css";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import PlaceOrderMobile from "./PlaceOrderMobile";
import { useRouter } from "next/router"

const PlaceOrderMobileOTP = ({ mobileNumber }) => {

  const router = useRouter();

  const navigateToPlaceOrderMobile = () => {
    router.push("/placeordermobile");
  };


  return (

    <div className={styles.PlaceOrderMobileOTP}>
      <div className={styles.h1}>Verify Mobile Number</div>
      <div className={styles.para}>
        To Use Your Saved Address, Enter the OTP Sent to
      </div>
      <div className={styles.center}><span className={styles.bgcolor}>{mobileNumber} <BorderColorIcon fontSize="16px" onClick={navigateToPlaceOrderMobile} /></span></div>
      <div className={styles.boxnote}>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
      </div>
      <div className={styles.center1}>Resend OTP in </div>
    </div>
  );
};

export default PlaceOrderMobileOTP;
