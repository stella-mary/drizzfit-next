<<<<<<< Updated upstream
import React, { useEffect, useState } from "react";
import styles from "@/styles/Shop1.module.css";
import axios from "axios";

const Shop1 = () => {
    const [selectedQuantity, setSelectedQuantity] = useState(1);
    const [groupedProductDetails, setGroupedProductDetails] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState({});
    const [selectedDescription, setSelectedDescription] = useState("");
    const orderDate = new Date();
    const [orderId, setOrderId] = useState();

    useEffect(() => {
        axios.get("http://localhost:1992/product/all").then((response) => {
            console.log("Product details: ", response.data);

            // Group products by name
            const groupedProducts = {};
            response.data.forEach((product) => {
                if (!groupedProducts[product.name]) {
                    groupedProducts[product.name] = [];
                }
                groupedProducts[product.name].push(product);
            });
=======
import React, { useState } from 'react';
import styles from "@/styles/Shop1.module.css";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

const Shop1 = () => {

    const [selectedQuantity, setSelectedQuantity] = useState(1);
    const [groupedProductDetails, setGroupedProductDetails] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState({});
    const [selectedDescription, setSelectedDescription] = useState("");
    const orderDate = new Date();
    const [orderId, setOrderId] = useState();

    useEffect(() => {
      axios.get("http://localhost:1992/product/all").then((response) => {
        console.log("Product details: ", response.data);

        // Group products by name
        const groupedProducts = {};
        response.data.forEach((product) => {
          if (!groupedProducts[product.name]) {
            groupedProducts[product.name] = [];
          }
          groupedProducts[product.name].push(product);
        });

    const labelStyle = {
        fontFamily: 'Telegraf UltraBold 800, sans-serif',
        fontSize: '16px',
    };

    const [number, setNumber] = useState(0);

    const handleIncrement = () => {
        setNumber(prevNumber => prevNumber + 1);
    };

    const handleDecrement = () => {
        if (number > 0) {
            setNumber(prevNumber => prevNumber - 1);
        }
    };

    return (
        <div className={styles.shop1}>
            <div className={styles.shop1Main}>
                <div className={styles.imageContainer1}></div>
                <div className={styles.shop1Sub}>
                    <div className={styles.h1}>Menstrual Cup</div>
                    <div className={styles.h2}>Rs. 449</div>
                    <div className={styles.footnote}>* inclusive of all taxes</div>
                    <div className={styles.size}>
                        <FormControl>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                                style={labelStyle}
                            >
                                <FormControlLabel value="Large" control={<Radio />} label="Large" style={labelStyle} />
                                <FormControlLabel value="Small" control={<Radio />} label="Small" style={labelStyle} />
                                <FormControlLabel value="Extra Small" control={<Radio />} label="Extra Small" style={labelStyle} />

                            </RadioGroup>
                        </FormControl>
                    </div>
                    <div className={styles.boxnote}>
                        <div className={styles.boxnoteh1}>What does this pack contain ?</div>
                        <div className={styles.boxnotePara}>1 Menstrual Cup with Cotton Pouch</div>

                        <div className={styles.boxnotePara}>The Plush Menstrual Cup is a perfect option for you to go all sustainable during your cycle.Our cups are:</div>

                        <div className={styles.list}>
                            <li>100 % Medical Grade Silicone</li>
                            <li>BPA Free | Latex Free</li>
                            <li>Made in FDA Approved Plant</li>
                            <li>Reusable upto 5 years</li>
                        </div>
                        <div className={styles.boxnotePara}><b>Size Guide</b></div>
                        <div className={styles.boxnotePara}>Plush Menstrual Cups comes in 3 sizes</div>
                        <div className={styles.boxnotePara}><b>Extra Small(XS)</b> – Perfect if you are under 18 years of age</div>
                        <div className={styles.boxnotePara1}><b>Small (S)</b> – Perfect if you are above 18 years // or gave birth via C - section</div>
                        <div className={styles.boxnotePara1}><b>Large (L)</b> – Perfect if you have given birth vaginally</div>
                    </div>
                    <div className={styles.shop1SubSub}>
                        <input type="number" id="quantity" name="quantity" min="1" max="5">
                        </input>
                        <button onClick={handleIncrement}>🔼</button>
                        <span>{number}</span>
                        <button onClick={handleDecrement}>🔽</button>
                        <div className={styles.button}>Buy Now</div>
                    </div>
                </div>
            </div>
        </div >
    )
}
>>>>>>> Stashed changes

            console.log("groupedProducts: ", groupedProducts);
            setGroupedProductDetails(groupedProducts);

            // Assuming the first product in the first group is the selected product
            if (groupedProducts[Object.keys(groupedProducts)[0]]) {
                console.log(
                    "Selected Product: ",
                    groupedProducts[Object.keys(groupedProducts)[0]][0]
                );
                setSelectedProduct(groupedProducts[Object.keys(groupedProducts)[0]][0]);
                setSelectedDescription(
                    groupedProducts[Object.keys(groupedProducts)[0]][0].description
                );
            }
        });
    }, []);

    const handleDescriptionChange = (event) => {
        const newDescription = event.target.value;
        setSelectedDescription(newDescription);

        // Find the corresponding product based on the selected description
        const selectedProductGroup = groupedProductDetails[selectedProduct.name];
        const selectedProductWithDescription = selectedProductGroup.find(
            (product) => product.description === newDescription
        );

        setSelectedProduct(selectedProductWithDescription);
    };
    return (
        <div className={styles.shopContainer}>
            <div className={styles.h1}>Menstrual Cup</div>
            <div className={styles.h2}>Rs. 449</div>
            <div className={styles.footnote}>* inclusive of all taxes</div>
            <div className={styles.size}>Large Small Extra Small</div>
            <div className={styles.boxnote}>
                <div className={styles.boxnoteh1}>What does this pack contain ?</div>
                <div className={styles.boxnotePara}>
                    1 Menstrual Cup with Cotton Pouch
                </div>

                <div className={styles.boxnotePara}>
                    The Plush Menstrual Cup is a perfect option for you to go all
                    sustainable during your cycle.Our cups are:
                </div>

                <div className={styles.list}>
                    <li>100 % Medical Grade Silicone</li>
                    <li>BPA Free | Latex Free</li>
                    <li>Made in FDA Approved Plant</li>
                    <li>Reusable upto 5 years</li>
                </div>
                <div className={styles.boxnotePara}>Size Guide</div>
                <div className={styles.boxnotePara}>
                    Plush Menstrual Cups comes in 3 sizes
                </div>
                <div className={styles.boxnotePara}>
                    Extra Small(XS) – Perfect if you are under 18 years of age
                </div>
                <div className={styles.boxnotePara}>
                    Small (S) – Perfect if you are above 18 years // or gave birth via C -
                    section
                </div>
                <div className={styles.boxnotePara}>
                    Large (L) – Perfect if you have given birth vaginally
                </div>
            </div>
            <div className={styles.button}>Buy Now</div>
            <div className={styles.shop1Container}>
                <input type="number" />
            </div>
        </div>
    );
};

export default Shop1;
