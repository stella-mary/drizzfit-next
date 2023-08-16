import styles from "@/styles/Choose.module.css"
import { useRouter } from "next/router"
import Image from "next/image";


const Choose = () => {
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

            <Image
                src="/image/choose.png"
                alt="choose"
                sizes="100vw"
                style={{
                    width: '100%',
                    height: 'auto',
                }}
                width={500}
                height={100}
            />
        </div>
    )
}

export default Choose
