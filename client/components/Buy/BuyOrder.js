import React, { useState } from "react";
import styles from "@/styles/BuyOrder.module.css";
import { useRouter } from "next/router";
import PlaceOrderPage from "../Shop/PlaceOrder";
import PlaceOrderNavbar from "../PlaceOrder/PlaceOrderNavbar";

const BuyOrder = ({ selectedQuantity, selectedProduct }) => {
  const router = useRouter();

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
      </div>
      {isDialogOpen && (
        <div className={styles.dialogContainer}>
          <div className={styles.dialogContainer1}>
            <div className={styles.dialogContent}>
              <PlaceOrderNavbar closeDialog={closeDialog} />
              <PlaceOrderPage
                selectedQuantity={selectedQuantity}
                router={router}
                selectedProduct={selectedProduct}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BuyOrder;
