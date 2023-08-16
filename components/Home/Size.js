import styles from "@/styles/Size.module.css"
import { useRouter } from "next/router"
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const boxVariant = {
    visible: {
        opacity: 1,
        x: 0, // Change from y: 0 to x: 0
        transition: { duration: 0.5 },
    },
    hidden: { opacity: 0, x: -50 }, // Change from y: 50 to x: -50
};


const Size = () => {

    const control1 = useAnimation();
    const [ref1, inView1] = useInView();
    const control2 = useAnimation();
    const [ref2, inView2] = useInView();
    const control3 = useAnimation();
    const [ref3, inView3] = useInView();
    const control4 = useAnimation();
    const [ref4, inView4] = useInView();
    const control5 = useAnimation();
    const [ref5, inView5] = useInView();
    const control6 = useAnimation();
    const [ref6, inView6] = useInView();
    const control7 = useAnimation();
    const [ref7, inView7] = useInView();


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

    useEffect(() => {
        if (inView5) {
            control5.start("visible");
        } else {
            control5.start("hidden");
        }
    }, [control5, inView5]);

    useEffect(() => {
        if (inView6) {
            control6.start("visible");
        } else {
            control6.start("hidden");
        }
    }, [control6, inView4]);

    useEffect(() => {
        if (inView7) {
            control7.start("visible");
        } else {
            control7.start("hidden");
        }
    }, [control7, inView4]);

    return (
        <div className={styles.size}>
            <div className={styles.backgroundImage}>

                <Image
                    src="/image/size2.png"
                    alt="size"
                    style={{
                        width: '100%',
                        height: '100vh',
                    }}
                    width={100}
                    height={100}
                />
            </div>
            <div className={styles.contentContainer}>
                <Image
                    src="/image/sizeCup1.png"
                    width={200}
                    height={100}
                    alt=""
                />
            </div>
            <div className={styles.sizeMain}>
                <div className={styles.sizeSub}>
                    <motion.div
                        className={styles.h1}
                        ref={ref1}
                        variants={boxVariant}
                        initial="hidden"
                        animate={control1}
                    >
                        Small
                    </motion.div>
                    <motion.div
                        className={styles.bullet}
                        ref={ref2}
                        variants={boxVariant}
                        initial="hidden"
                        animate={control2}
                    >
                        <ul>
                            <li>For teenagers.</li>
                            <li>For those who has very less flow.</li>
                        </ul>
                    </motion.div>
                </div>
                <div className={styles.sizeSub}>
                    <motion.div
                        className={styles.h1}
                        ref={ref3}
                        variants={boxVariant}
                        initial="hidden"
                        animate={control3}
                    >
                        Medium
                    </motion.div>
                    <motion.div
                        className={styles.bullet}
                        ref={ref4}
                        variants={boxVariant}
                        initial="hidden"
                        animate={control4}
                    >
                        <ul>
                            <li>Perfect if you have given birth via C-Section.</li>
                            <li>For those who has an average flow.</li>
                        </ul>
                    </motion.div>
                </div>
                <div className={styles.sizeSub}>
                    <motion.div
                        className={styles.h1}
                        ref={ref5}
                        variants={boxVariant}
                        initial="hidden"
                        animate={control5}
                    >
                        Large
                    </motion.div>
                    <motion.div
                        className={styles.bullet}
                        ref={ref6}
                        variants={boxVariant}
                        initial="hidden"
                        animate={control6}
                    >
                        <ul>
                            <li> Prefect if you have given birth vaginally.</li>
                            <li> For those who have a heavy flow.</li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Size
