import Navbar from "@/components/Home/Navbar";
import BuyHead from "@/components/Buy/BuyHead";
import BuyDetails from "@/components/Buy/BuyDetails";
import BuySummary from "@/components/Buy/BuySummary";
import BuyOrder from "@/components/Buy/BuyOrder";
import BuyDiscount from "@/components/Buy/BuyDiscount";
import styles from '../styles/Buy.module.css';


function BuyPage({ selectedQuantity, setSelectedQuantity, selectedProductPrice, subtotal }) {

    console.log("quantity received buypage" + selectedQuantity)

    return (
        <div>
            <div className={styles.buy}>
                <BuyHead />
                <BuyDetails selectedQuantity={selectedQuantity} setSelectedQuantity={setSelectedQuantity} subtotal={subtotal} />
                <BuyOrder selectedQuantity={selectedQuantity} setSelectedQuantity={setSelectedQuantity} subtotal={subtotal} />
            </div>
        </div >
    );
}

export default BuyPage;