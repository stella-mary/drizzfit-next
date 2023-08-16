import styles from "@/styles/Size.module.css"
import { useRouter } from "next/router"
import Image from "next/image";


const Size = () => {
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
                    <div className={styles.h1}>Small</div>
                    <div className={styles.bullet}>
                        <ul>
                            <li>For teenagers.</li>
                            <li>For those who has very less flow.</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.sizeSub}>
                    <div className={styles.h1}>Medium</div>
                    <div className={styles.bullet}>
                        <ul>
                            <li>Perfect if you have given birth via C-Section.</li>
                            <li>For those who has an average flow.</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.sizeSub}>
                    <div className={styles.h1}>Large</div>
                    <div className={styles.bullet}>
                        <ul>
                            <li> Prefect if you have given birth vaginally.</li>
                            <li> For those who have a heavy flow.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Size
