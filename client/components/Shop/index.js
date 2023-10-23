import React from 'react';
import Link from 'next/link';
import Shop from '@/components/Shop/Shop';
import Navbar from '@/components/Home/Navbar';
import styles from '../styles/Shop.module.css';
import PlaceOrder from '@/components/Shop/PlaceOrder';

const ShopPage = () => {
    return (
        <div className={styles.container}>
            <Navbar />
            <Shop />
            {/* Wrap the PlaceOrder component with the Link component */}
            <Link href="/placeorder">
                Place Order
            </Link>
        </div>
    );
};

export default ShopPage;
