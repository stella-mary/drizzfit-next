import BuyTop from '@/components/Buy/BuyTop'
import BuyLeft from '@/components/Buy/BuyLeft';
import BuyCustomer from '@/components/Buy/BuyCustomer';
import BuyPayment from '@/components/Buy/BuyPayment';
import BuySummary from '@/components/Buy/BuySummary';
import BuyRight from '@/components/Buy/BuyRight';
import styles from '../styles/BuyTop.module.css'

const shop = () => {
    return (
        <div className={styles.buy}>
            <div className={styles.buyTopContainer}>
                <BuyTop />
            </div>
            <div className={styles.buyContainer}>
                <div className={styles.buyLeftContainer}>
                    <BuyLeft />
                    {/* <BuyCustomer />
                    <BuySummary />
                    <BuyPayment /> */}
                </div>
                {/* <div className={styles.buyRightContainer}>
                    <BuyRight />
                </div> */}
            </div>
        </div>
    );
};

export default shop;