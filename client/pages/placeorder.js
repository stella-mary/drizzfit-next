import React from 'react';
import PlaceOrderNavbar from '@/components/PlaceOrder/PlaceOrderNavbar';
import PlaceOrderMenu from '@/components/PlaceOrder/PlaceOrderMenu';
import PlaceOrderAddress from '@/components/PlaceOrder/PlaceOrderAddress';
import PlaceOrderFooter from '@/components/PlaceOrder/PlaceOrderFooter';
import PlaceOrderMobile from '@/components/PlaceOrder/PlaceOrderMobile';
import PlaceOrderPayment from '@/components/PlaceOrder/PlaceOrderPayment';
import PlaceOrderSummary from '@/components/PlaceOrder/PlaceOrderSummary';
import PlaceOrderStepper from '@/components/PlaceOrder/PlaceOrderStepper'

const PlaceOrderPage = () => {
    return (
        <div>
            <PlaceOrderNavbar />
            <PlaceOrderMenu />
            <PlaceOrderStepper />
            <PlaceOrderMobile />
            <PlaceOrderAddress />
            <PlaceOrderPayment />
            <PlaceOrderSummary />
            <PlaceOrderFooter />

        </div>
    );
};

export default PlaceOrderPage;
