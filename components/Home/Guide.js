import styles from "@/styles/Guide.module.css"
import { useRouter } from "next/router"
import Image from "next/image";


const Guide = () => {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.guide}>
                    <div className={styles.h1}>Sizing Guide</div>
                    <div className={styles.para}>Drizzfit Menstrual Cups comes in 3 sizes.</div>
                </div>
            </div>
        </div >
    )
}

export default Guide
