import React from 'react'
import styles from "@/styles/BuyOrder.module.css";
import { useRouter } from "next/router"

const BuyOrder = () => {

  const router = useRouter();

  const navigateToPlaceOrderMenu = () => {
    router.push("/placeorder");
  };

  return (
    <div className={styles.BuyOrder} onClick={navigateToPlaceOrderMenu}>
      PLACE ORDER
    </div>
  )
}

export default BuyOrder
