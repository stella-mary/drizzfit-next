import styles from "@/styles/Users.module.css"
import { useRouter } from "next/router"
import Image from "next/image";


const Users = () => {
    return (
        <div className={styles.users}>
            <div className={styles.h1}>Satisfied Drizzfit Users</div>
            <div className={styles.usersMain}>
                <div className={styles.usersSub}>
                    <div className={styles.usersSubSub}>
                        <div className={styles.cardTop}>
                            <Image
                                src="/image/user.png"
                                width="150"
                                height="150"
                                alt=""
                                className={styles.usersImage}
                            />
                        </div>
                        <div className={styles.cardBottom}>
                            <div className={styles.h2}>Vidhya</div>
                            <div className={styles.h3}>Yoga Practitioner</div>
                        </div>
                    </div>

                    <div className={styles.para}>I have been using menstrual cup before, but this one is great because it is easy to pull out.</div>
                </div>
                <div className={styles.usersSub}>
                    <div className={styles.usersSubSub}>
                        <div className={styles.cardTop}>
                            <Image
                                src="/image/profile.png"
                                width="150"
                                height="150"
                                alt=""
                                className={styles.usersImage}
                            />
                        </div>
                        <div className={styles.cardBottom}>
                            <div className={styles.h2}>Fathima Xavier</div>
                            <div className={styles.h3}>Software Engineer</div>
                        </div>
                    </div>

                    <div className={styles.para}>Super easy to use and doesn't leak, plus you don't feel it when you're wearing it! I was intimidated at first but now I will never use anything else.

                    </div>
                </div>
                <div className={styles.usersSub}>
                    <div className={styles.usersSubSub}>
                        <div className={styles.cardTop}>
                            <Image
                                src="/image/user6.png"
                                width="150"
                                height="150"
                                alt=""
                                className={styles.usersImage}
                            />
                        </div>
                        <div className={styles.cardBottom}>
                            <div className={styles.h2}>Daffy</div>
                            <div className={styles.h3}>Makeup Artist</div>
                        </div>
                    </div>

                    <div className={styles.para}>This cup has made my period so easy. I'm very thankful for it as it allows me much more physical freedom during my period.</div>
                </div>


            </div>
        </div>
    )
}

export default Users
