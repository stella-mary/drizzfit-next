import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Home/Navbar';
import styles from '../styles/Shop.module.css';
import Shop1 from '@/components/Shop/Shop1';


const Shop1Page = () => {
    return (
        <div className={styles.container}>
            <Navbar />
            <Shop1 />
        </div>
    );
};

export default Shop1Page;
