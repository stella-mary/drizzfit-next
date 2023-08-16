import styles from "@/styles/Benefits.module.css";
import { useRouter } from "next/router";
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
    hidden: { opacity: 0, x: 50 }, // Change from y: 50 to x: -50
};

const Benefits = () => {

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
        <div>
            <div className={styles.container}>
                <div className={styles.benefits}>
                    <div className={styles.h1}>
                        Days of messy periods are over. We are here to cure it!
                    </div>
                    <div className={styles.benefitsMain}>
                        <div className={styles.benefitsSub}>
                            <motion.div
                                ref={ref1}
                                variants={boxVariant}
                                initial="hidden"
                                animate={control1}>

                                <Image
                                    src="/image/tick.png"
                                    width="180"
                                    height="100"
                                    alt=""
                                />
                            </motion.div>
                            <div className={styles.para}>100% Medical Graded Silicone</div>
                            <div className={styles.para1}>
                                All cups are made in FDA approved facilities and are BPA free.
                            </div>
                        </div>
                        <div className={styles.benefitsSub}>
                            <motion.div
                                ref={ref2}
                                variants={boxVariant}
                                initial="hidden"
                                animate={control2}>

                                <Image
                                    src="/image/tick.png"
                                    width="180"
                                    height="100"
                                    alt=""
                                />
                            </motion.div>
                            <div className={styles.para}>Upto 8-10 hours protection</div>
                            <div className={styles.para1}>
                                We got you covered for 10 hours so that you don't have to worry about leaks.
                            </div>
                        </div>
                        <div className={styles.benefitsSub}>
                            <motion.div
                                ref={ref3}
                                variants={boxVariant}
                                initial="hidden"
                                animate={control3}>

                                <Image
                                    src="/image/tick.png"
                                    width="180"
                                    height="100"
                                    alt=""
                                />
                            </motion.div>
                            <div className={styles.para}>Eco friendly & Plastic free</div>
                            <div className={styles.para1}>
                                Our cups are reusable and durable that helps you use them for upto 5 years.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Benefits;
