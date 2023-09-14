import React, { useEffect, useState, useRef } from "react";
import styles from "@/styles/BuyOrder.module.css";
import { useRouter } from "next/router"
import PlaceOrderPage from '@/pages/placeorder';
import CloseIcon from '@mui/icons-material/Close';


const BuyOrder = () => {

  const router = useRouter();

  const navigateToPlaceOrderMenu = () => {
    router.push("/placeorder");
  };

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };


  return (
    <div>
      <div className={styles.BuyOrder} onClick={openDialog}>
        PLACE ORDER
      </div >
      {isDialogOpen && (
        <div className={styles.dialogContainer}>
          <div className={styles.dialogContainer1}>
            <div className={styles.dialogContent}>
              {/* <div className={styles.closeButton} onClick={closeDialog}>
              <CloseIcon />
            </div> */}
              <PlaceOrderPage />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BuyOrder
