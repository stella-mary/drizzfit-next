import Shop from '@/components/Shop/Shop'
import Navbar from '@/components/Home/Navbar';
import styles from '../styles/Shop.module.css'
import PlaceOrder from '@/components/Shop/PlaceOrder';

const shop = () => {
    return (
        <div className={styles.container}>
            <Navbar />
            <Shop />
        </div>
    );
};

export default shop;