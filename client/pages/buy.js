import Navbar from "@/components/Home/Navbar";
import BuyHead from "@/components/Buy/BuyHead";
import BuyDetails from "@/components/Buy/BuyDetails";
import BuySummary from "@/components/Buy/BuySummary";
import BuyOrder from "@/components/Buy/BuyOrder";
import BuyDiscount from "@/components/Buy/BuyDiscount";
import styles from '../styles/Buy.module.css';


function BuyPage({ selectedQuantity, selectedProductPrice, subtotal }) {

    return (
        <div>
            <div className={styles.buy}>
                <BuyHead />
                <BuyDetails subtotal={subtotal} />
                <BuyDiscount />
                {/* <BuySummary /> */}
                <BuyOrder />

            </div>
        </div >
    );
}

export default BuyPage;