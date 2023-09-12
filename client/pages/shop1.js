import React from 'react';
import Navbar from '@/components/Home/Navbar';
import styles from '../styles/Shop1.module.css';
import Shop1 from '@/components/Shop/Shop1';
import Shop2 from '@/components/Shop/Shop2';

const Shop1Page = (isDrawerOpen, setIsDrawerOpen, selectedProduct, selectedQuantity) => {
    return (
        <div>
            <Navbar />
            <div className={styles.shop1}>
                <div className={styles.shop1Main}>
                    <Shop1 />
                    <Shop2 />
                </div>
            </div>
        </div>
    );
};

export default Shop1Page;
