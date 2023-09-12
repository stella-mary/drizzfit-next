
import styles from "@/styles/BuyDetails.module.css";
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

import {
    Box,
    Button,
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    TextField,
    Typography,
} from "@mui/material";


const BuyDetails = () => {

    const [selectedQuantity, setSelectedQuantity] = useState(1);
    const [groupedProductDetails, setGroupedProductDetails] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState({});
    const [selectedDescription, setSelectedDescription] = useState("");

    useEffect(() => {
        console.log("server" + process.env.BASE_URL);
        console.log("process" + JSON.stringify(process.env));
        // console.log("stella" + BASE_URL)
        axios.get(`${process.env.BASE_URL}/product/all`).then((response) => {
            console.log("Product details: ", response.data);

            // Group products by name
            const groupedProducts = {};
            response.data.forEach((product) => {
                if (!groupedProducts[product.name]) {
                    groupedProducts[product.name] = [];
                }
                groupedProducts[product.name].push(product);
            });
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

    const handleDecreaseQuantity = () => {
        if (selectedQuantity > 1) {
            setSelectedQuantity(selectedQuantity - 1);
        }
    };

    const handleIncrease = () => {
        // if (selectedQuantity >= 1) {
        setSelectedQuantity(parseInt(selectedQuantity) + 1);
        console.log(
            "Selected Quantity is now an integer:",
            parseInt(selectedQuantity) + 1
        );
        // }
    };

    return (
        <div>
            <div className={styles.BuyDetailsMain}>
                <div className={styles.imageContainer7}></div>
                <div className={styles.BuyName}>
                    <div className={styles.BuyNameMain}>
                        {" "}
                        {selectedProduct.name}
                    </div>
                    <div className={styles.BuyNameSub}>
                        {selectedProduct.description}
                    </div>
                    <table className={styles.table}>
                        <tbody>
                            <tr>
                                <td style={{ textAlign: "center" }}>
                                    <div className={styles.BuyDetailsButton} onClick={handleDecreaseQuantity}>
                                        -
                                    </div>
                                </td>
                                <td style={{ borderRight: 'solid 2px #cccccc' }}></td>
                                <td style={{ textAlign: "center", fontSize: '15px', color: "black", marginTop: '10px', marginBottom: '5px', fontFamily: "'Telegraf Regular 400', sans-serif", fontSize: "14px", paddingLeft: '5px', paddingRight: '5px' }}>
                                    {selectedQuantity}
                                </td>
                                <td style={{ borderRight: 'solid 2px #cccccc' }}></td>
                                <td style={{ textAlign: "center", marginTop: '5px', marginBottom: '5px', fontSize: '15px' }}>
                                    <div className={styles.BuyDetailsButton1} onClick={handleIncrease}>
                                        +
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={styles.BuyPrice}>₹{selectedProduct.price}</div>
            </div>
            <div className={styles.borderbottom}>&#160;</div>
        </div>
    )
}

export default BuyDetails

