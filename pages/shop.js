import Shop from '@/components/Shop/Shop'
import Navbar from '@/components/Home/Navbar';
import styles from '../styles/Shop.module.css'

const shop = () => {
    return (
        <div className={styles.container}>
            <Navbar />
            <Shop />
        </div>
    );
};

export default shop;