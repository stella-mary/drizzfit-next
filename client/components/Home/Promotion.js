import React, { useState, useRef } from "react";
import styles from "@/styles/Promotion.module.css"
import { useRouter } from "next/router"
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect, } from "react";
import { useInView } from "react-intersection-observer";

const boxVariant = {
    visible: {
        opacity: 1,
        x: 0, // Change from y: 0 to x: 0
        transition: { duration: 0.5 },
    },
    hidden: { opacity: 0, x: -50 }, // Change from y: 50 to x: -50
};


const Promotion = () => {

    const router = useRouter();

    const navigateToShop1 = () => {
        router.push("/shop1");
    };

    const control1 = useAnimation();
    const [ref1, inView1] = useInView();
    const control2 = useAnimation();
    const [ref2, inView2] = useInView();
    const control3 = useAnimation();
    const [ref3, inView3] = useInView();

    useEffect(() => {
        if (inView1) {
            control1.start("visible");
        } else {
            control1.start("hidden");
        }
    }, [control1, inView1]);

    useEffect(() => {
        if (inView2) {
            control2.start("visible");
        } else {
            control2.start("hidden");
        }
    }, [control2, inView2]);

    useEffect(() => {
        if (inView3) {
            control3.start("visible");
        } else {
            control3.start("hidden");
        }
    }, [control3, inView3]);

    return (
        <div className={styles.promotion}>
            <div className={styles.promotionMain} >
                <motion.div
                    className={styles.h1}
                    ref={ref1}
                    variants={boxVariant}
                    initial="hidden"
                    animate={control1}
                >
                    Get a mess free periods!
                </motion.div>
                <motion.div
                    className={styles.para}
                    ref={ref2}
                    variants={boxVariant}
                    initial="hidden"
                    animate={control2}
                >
                    Switch to menstrual cup and forget
                    <br />
                    your periods forever.
                </motion.div>
                <motion.div
                    className={styles.button}
                    ref={ref3}
                    variants={boxVariant}
                    initial="hidden"
                    animate={control3}
                    onClick={navigateToShop1}
                >
                    Shop
                </motion.div>
            </div>
            <div className={styles.imageContainer1}>
            </div>
            {/* <Image
                src="/image/promotion.png"
                alt="promotion"
                sizes="100vw"
                style={{
                    width: "100%",
                    height: "100vh",
                }}
                width={500}
                height={100}
            /> */}
        </div>
    )
}

export default Promotion
