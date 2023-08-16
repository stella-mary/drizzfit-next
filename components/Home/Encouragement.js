import styles from "@/styles/Encouragement.module.css"
import { useRouter } from "next/router"
import Image from "next/image";


const Encouragement = () => {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.encouragement}>
                    <div className={styles.encouragementMain}>
                        {/* <Image
                            src="/image/encouragement.png"
                            width="300"
                            height="550"
                            alt=""
                            className={styles.encouragementImage}
                        /> */}
                        <Image
                            src="/image/encouragement.png"
                            alt="encouragement"
                            sizes="100vw"
                            style={{
                                width: '100%',
                                height: '100vh',
                            }}
                            width={500}
                            height={100}
                        />
                        <div className={styles.encouragementSub}>
                            <div className={styles.h1}>Do what you like!</div>
                            <div className={styles.para}>Swim/Dance/Jog/Trekk on your periods.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Encouragement
