import styles from "@/styles/Navbar.module.css"
import { useRouter } from "next/router"
import Image from "next/image";


const Navbar = () => {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.navbar}>
                    <div className={styles.navbarHead}>
                        DRIZZFIT
                    </div>
                    <Image
                        src="/image/logoImages.png"
                        width="100"
                        height="100"
                        alt=""
                        className={styles.navbarImage}
                    />

                </div>
            </div>
        </div>
    )
}

export default Navbar
