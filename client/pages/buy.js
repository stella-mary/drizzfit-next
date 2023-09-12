import Navbar from "@/components/Home/Navbar";
import BuyHead from "@/components/Buy/BuyHead";
import BuyDetails from "@/components/Buy/BuyDetails";
import BuySummary from "@/components/Buy/BuySummary";
import BuyOrder from "@/components/Buy/BuyOrder";


function BuyPage() {

    return (
        <div>
            <Navbar />
            <BuyHead />
            <BuyDetails />
            <BuySummary />
            <BuyOrder />
        </div >
    );
}

export default BuyPage;