import React, { useState, useRef } from "react";
import styles from "@/styles/ContactUs.module.css"
import { useRouter } from "next/router"
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect, } from "react";
import { useInView } from "react-intersection-observer";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PhoneIcon from '@mui/icons-material/Phone';

const boxVariant = {
    visible: {
        opacity: 1,
        x: 0, // Change from y: 0 to x: 0
        transition: { duration: 0.5 },
    },
    hidden: { opacity: 0, x: -50 }, // Change from y: 50 to x: -50
};


const ContactUs = () => {

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
    const control4 = useAnimation();
    const [ref4, inView4] = useInView();


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


    useEffect(() => {
        if (inView4) {
            control4.start("visible");
        } else {
            control4.start("hidden");
        }
    }, [control4, inView4]);

    return (
        <div className={styles.ContactUs}>
            <div className={styles.imageContactUs1}>
            </div>
            <div className={styles.ContactUsMain} >
                <motion.div
                    className={styles.h1}
                    ref={ref1}
                    variants={boxVariant}
                    initial="hidden"
                    animate={control1}
                >
                    Get in Touch
                </motion.div>
                <motion.div
                    className={styles.para}
                    ref={ref2}
                    variants={boxVariant}
                    initial="hidden"
                    animate={control2}
                >
                    14, Ekambaram Street, Chitlapakkam, Chennai 600064.
                </motion.div>
                <motion.div
                    className={styles.para}
                    ref={ref3}
                    variants={boxVariant}
                    initial="hidden"
                    animate={control3}
                    onClick={navigateToShop1}
                >
                    <PhoneIcon /> 72992 60600
                </motion.div>
                <motion.div
                    className={styles.ContactUsButton}
                    ref={ref4}
                    variants={boxVariant}
                    initial="hidden"
                    animate={control4}>
                    <div className={styles.ContactUsButtonIcon}><a href="https://www.instagram.com/drizzfit_mc/"><InstagramIcon /></a></div>
                </motion.div>
            </div>

        </div>
    )
}

export default ContactUs
