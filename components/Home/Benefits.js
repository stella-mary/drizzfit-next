import styles from "@/styles/Benefits.module.css";
import { useRouter } from "next/router";
import Image from "next/image";

const Benefits = () => {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.benefits}>
                    <div className={styles.h1}>
                        Days of messy periods are over. We are here to cure it!
                    </div>
                    <div className={styles.benefitsMain}>
                        <div className={styles.benefitsSub}>
                            <Image
                                src="/image/tick.png"
                                width="180"
                                height="100"
                                alt=""
                            />
                            <div className={styles.para}>100% Medical Graded Silicone</div>
                            <div className={styles.para1}>
                                All cups are made in FDA approved facilities and are BPA free.
                            </div>
                        </div>
                        <div className={styles.benefitsSub}>
                            <Image
                                src="/image/tick.png"
                                width="180"
                                height="100"
                                alt=""
                            />
                            <div className={styles.para}>Upto 8-10 hours protection</div>
                            <div className={styles.para1}>
                                We got you covered for 10 hours so that you don't have to worry about leaks.
                            </div>
                        </div>
                        <div className={styles.benefitsSub}>
                            <Image
                                src="/image/tick.png"
                                width="180"
                                height="100"
                                alt=""
                            />
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
