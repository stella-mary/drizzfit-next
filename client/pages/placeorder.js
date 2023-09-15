import React from 'react';
import PlaceOrderNavbar from '@/components/PlaceOrder/PlaceOrderNavbar';
import PlaceOrderMenu from '@/components/PlaceOrder/PlaceOrderMenu';
import PlaceOrderAddress from '@/components/PlaceOrder/PlaceOrderAddress';
import PlaceOrderFooter from '@/components/PlaceOrder/PlaceOrderFooter';
import PlaceOrderMobile from '@/components/PlaceOrder/PlaceOrderMobile';
import PlaceOrderPayment from '@/components/PlaceOrder/PlaceOrderPayment';
import PlaceOrderSummary from '@/components/PlaceOrder/PlaceOrderSummary';
import PlaceOrderStepper from '@/components/PlaceOrder/PlaceOrderStepper';
import styles from "@/styles/PlaceOrder.module.css";

const PlaceOrderPage = () => {
    return (
        <div>
            <PlaceOrderNavbar />
            <div className={styles.PlaceOrderContainer}>
                <div className={styles.PlaceOrderContainer1}>
                    <PlaceOrderMenu />
                    <PlaceOrderStepper />
                    <PlaceOrderMobile />
                    <PlaceOrderAddress />
                    <PlaceOrderPayment />
                    <PlaceOrderFooter />
                </div>
                <div className={styles.PlaceOrderContainer2}>
                    <PlaceOrderSummary />
                </div>
            </div>
        </div>
    );
};

export default PlaceOrderPage;
