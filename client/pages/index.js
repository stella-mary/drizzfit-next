import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '@/components/Home/Navbar'
import Promotion from '@/components/Home/Promotion'
import Benefits from '@/components/Home/Benefits'
import Encouragement from '@/components/Home/Encouragement'
import Choose from '@/components/Home/Choose'
import Guide from '@/components/Home/Guide'
import Size from '@/components/Home/Size'
import Users from '@/components/Home/Users'
import Use from '@/components/Home/Use'
import ContactUs from '@/components/Home/ContactUs'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Drizzfit</title>
      </Head>
      <Navbar />
      <Promotion />
      <Benefits />
      <Encouragement />
      <Choose />
      <Guide />
      <Size />
      <Users />
      <Use />
      <ContactUs />
    </div >
  )
}
