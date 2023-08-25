import styles from "@/styles/Use.module.css"
import { useRouter } from "next/router"
import Image from "next/image";


const Use = () => {
    return (
        <div className={styles.use}>
            <div className={styles.h1}>How to use?</div>
            <div className={styles.useMain}>
                <div className={styles.useSub}>
                    <div className={styles.imageContainer1}>
                    </div>

                    {/* <Image
                                src="/image/use12.png"
                                width="200"
                                height="200"
                                alt=""
                                className={styles.useImage}
                            /> */}
                    <div className={styles.para}>STEP 1</div>
                    <div className={styles.para}>PINCH - using ﻿the finger indent & FOLD - in half, holding it in one hand</div>
                </div>
                <div className={styles.useSub}>
                    <div className={styles.imageContainer2}>
                    </div>

                    {/* <Image
                                src="/image/use10.png"
                                width="200"
                                height="200"
                                alt=""
                                className={styles.useImage}
                            /> */}
                    <div className={styles.para}>STEP 2</div>
                    <div className={styles.para}>INS﻿ERT - as easily as a tampon</div>
                </div>
                <div className={styles.useSub}>
                    <div className={styles.imageContainer3}>
                    </div>

                    {/* <Image
                                src="/image/use11.png"
                                width="200"
                                height="200"
                                alt=""
                                className={styles.useImage}
                            /> */}
                    <div className={styles.para}>STEP 3</div>
                    <div className={styles.para}>Just sit and RELAX on your couch without any worries.</div>
                </div>
            </div>
        </div>
    )
}

export default Use
