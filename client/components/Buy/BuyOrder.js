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

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to open/close the sidebar
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };


  return (
    <div>
      <div className={styles.BuyOrder} onClick={openSidebar}>
        PLACE ORDER
      </div >
      {
        isSidebarOpen && (
          <div className={`${styles.sidebar} ${styles.open}`}>
            <div className={styles.closeButton} onClick={closeSidebar}>
              <CloseIcon />
            </div>
            <PlaceOrderPage />
          </div>
        )}
    </div>
  );
};

export default BuyOrder
