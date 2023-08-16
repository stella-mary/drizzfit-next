import styles from "@/styles/Promotion.module.css"
import { useRouter } from "next/router"
import Image from "next/image";


const Promotion = () => {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.promotion}>
                    <div className={styles.promotionMain}>
                        <div className={styles.h1}>Get a mess free periods!</div>
                        <div className={styles.para}>Switch to menstrual cup and forget<br />your periods forever.</div>
                        <div className={styles.button}>Shop</div>
                    </div>
                    <Image
                        src="/image/promotion.png"
                        alt="promotion"
                        sizes="100vw"
                        style={{
                            width: '100%',
                            height: '100vh',
                        }}
                        width={500}
                        height={100}
                    />
                </div>
            </div>
        </div>
    )
}

export default Promotion
