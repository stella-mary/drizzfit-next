import styles from "@/styles/Choose.module.css"
import { useRouter } from "next/router"
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const boxVariant = {
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
    },
    hidden: { opacity: 0, y: 50 },
};

const Choose = () => {

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
        <div className={styles.choose}>
            <div className={styles.chooseMain}>
                <div className={styles.h1}>Why choose Drizzfit?</div>
                <div className={styles.para}>100% medical graded silicone</div>

                <div className={styles.para}>No Stain / Itches / Rashes / Odour</div>
                <div className={styles.para}>Wear upto 10 hours</div>

                <div className={styles.para}>Reusable upto 5 years</div>
                <div className={styles.img}>

                    <Image
                        src="/image/choose6.png"
                        alt="choose2"
                        width={300}
                        height={200}
                        className={styles.gridItem}
                    />
                    {/* <div className={styles.img1}>
                        <Image
                            src="/image/choose2.png"
                            alt="choose2"
                            width={150}
                            height={150}
                            className={styles.gridItem}
                        />
                        <Image
                            src="/image/choose4.png"
                            alt="choose3"
                            width={150}
                            height={150}
                            className={styles.gridItem}
                        />
                    </div> */}
                    {/* <div className={styles.img2}>
                        <Image
                            src="/image/choose3.png"
                            alt="choose3"
                            width={150}
                            height={150}
                            className={styles.gridItem}
                        />
                    </div> */}
                </div>
            </div>

            <motion.div
                ref={ref1}
                variants={boxVariant}
                initial="hidden"
                animate={control1}
            >
                <Image
                    src="/image/choose.png"
                    alt="choose"
                    sizes="100vw"
                    style={{
                        width: "100%",
                        height: "100vh",
                    }}
                    width={500}
                    height={100}
                />

            </motion.div>
        </div>
    )
}

export default Choose
