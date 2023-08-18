import styles from "@/styles/Shop.module.css"
import { useRouter } from "next/router"
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

// const boxVariant = {
//     visible: {
//         opacity: 1,
//         x: 0, // Change from y: 0 to x: 0
//         transition: { duration: 0.5 },
//     },
//     hidden: { opacity: 0, x: -50 }, // Change from y: 50 to x: -50
// };


const Shop = () => {

    return (
        <div className={styles.shop}>
            <div className={styles.shopMain}>
                <div className={styles.imageContainer1}></div>
                <div className={styles.shopMain1}>
                    <div className={styles.imageContainer2}></div>
                </div>
                <div className={styles.shopMain2}>
                    <div className={styles.h1}>Metabo – Immunity Booster</div>
                    SKU: N/A
                    From: ₹999.00
                    Enter Pincode
                    CHECK PINCODE
                    Metabo keeps your immune system strong. It provides proper healthy rich nutrients to your lifestyle. Improve your digestion and metabolism with our immunity booster.
                    Free Shipping on all Prepaid orders.

                </div>
            </div>
        </div>
    )
}

export default Shop
