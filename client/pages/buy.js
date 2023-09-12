import Navbar from "@/components/Home/Navbar";
import BuyHead from "@/components/Buy/BuyHead";
import BuyDetails from "@/components/Buy/BuyDetails";
import BuySummary from "@/components/Buy/BuySummary";
import BuyOrder from "@/components/Buy/BuyOrder";
import styles from '../styles/Buy.module.css';


function BuyPage() {

    return (
        <div>
            <div className={styles.buy}>
                <BuyHead />
                <BuyDetails />
                <BuySummary />

            </div>
        </div >
    );
}

export default BuyPage;