import React, { useState } from "react";
import styles from "@/styles/Shop.module.css"
import { Box, Typography, useTheme } from "@mui/material";
import { Facebook, Instagram, Twitter } from '@mui/icons-material';
import { useRouter } from "next/router"
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Buy() {

    const router = useRouter();

    const navigateToBuy = () => {
        router.push("/buy");
    };


    const [selectedQuantity, setSelectedQuantity] = useState(1);

    const handleDecreaseQuantity = () => {
        if (selectedQuantity > 1) {
            setSelectedQuantity(selectedQuantity - 1);
        }
    };

    const handleIncreaseQuantity = () => {
        setSelectedQuantity(selectedQuantity + 1);
    };

    return (
        <div className={styles.shop}>
            <Box
                display="flex"
                width="97%"
                height="100vh"
                alignItems="top"
                gap="1%"
                borderRadius="10px"
                paddingLeft="1%"
                paddingTop='1%'
                paddingRight='1%'
                m="10px"
                backgroundColor="#fee600"
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                        width: "10%",
                    }}
                >
                    <div className={styles.shopContainer2}></div>
                    <div className={styles.shopContainer3}></div>
                    <div className={styles.shopContainer4}></div>
                </Box>

                <Box
                    sx={{
                        width: "44%",
                        display: "flex",
                        objectFit: "cover",
                        alignItems: "top",
                    }}
                >
                    <div className={styles.productDetails}>
                        <div className={styles.shopContainer5}></div>
                        <div className={styles.heartIcon}>
                            <FavoriteBorderIcon sx={{ fontSize: "40px", color: "black", textAlign: 'center' }} />
                        </div>
                    </div>
                </Box>

                <Box
                    sx={{
                        width: "44%",
                        marginLeft: "10px",
                        alignItems: "top",
                    }}
                >
                    <Typography
                        backgroundColor="black"
                        color="white"
                        padding="5px"
                        width="25%"
                        borderRadius="10px"
                        textAlign="center"
                        style={{ fontFamily: "'Telegraf UltraBold 800', sans-serif" }}
                    >
                        In Stock
                    </Typography>
                    <Typography
                        variant="h5"
                        color="black"
                        marginTop="20px"
                        style={{ fontFamily: "'Telegraf UltraBold 800', sans-serif" }}
                    >
                        NIKE
                    </Typography>
                    <Typography
                        variant="h3"
                        marginTop="10px"
                        style={{ fontFamily: "'Telegraf UltraBold 800', sans-serif" }}
                    >
                        <b>Air Jordan 270</b>
                    </Typography>
                    <Typography
                        variant="h3"
                        marginTop="10px"
                        color="black"
                        style={{ fontFamily: "'Telegraf UltraBold 800', sans-serif" }}
                    >
                        $350
                    </Typography>

                    <div style={{ display: 'flex', alignItems: 'center', fontFamily: "'Telegraf Regular 400', sans-serif", marginTop: '20px', gap: '10px' }}>
                        <label htmlFor="sizeSelect" style={{ marginRight: '10px', fontSize: '20px', fontFamily: "'Telegraf Regular 400', sans-serif" }}>
                            Select Size:
                        </label>
                        <select
                            id="sizeSelect"
                            // value={selectedSize}
                            // onChange={handleSizeChange}
                            style={{
                                flex: '1',
                                maxWidth: '70px',
                                color: 'black',
                                backgroundColor: "transparent",
                                padding: '10px',
                                fontFamily: "'Telegraf UltraBold 800', sans-serif",
                                borderWidth: '2px',
                                borderStyle: 'solid'
                            }}
                        >
                            <option style={{ color: 'black', fontFamily: "'Telegraf Regular 400', sans-serif" }} value="M">M</option>
                            <option style={{ color: 'black', fontFamily: "'Telegraf Regular 400', sans-serif" }} value="S">S</option>
                            <option style={{ color: 'black', fontFamily: "'Telegraf Regular 400', sans-serif" }} value="L">L</option>
                        </select>
                        <style>{`
          select#sizeSelect option:checked {
            border-color: black;
          }
        `}</style>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', fontFamily: "'Telegraf Regular 400', sans-serif", marginTop: '20px', gap: '20px' }}>
                        <Typography variant="h6" marginTop="20px" style={{ fontFamily: "'Telegraf Regular 400', sans-serif" }}>Quantity:</Typography>
                        <div>
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '15px',
                                    marginTop: '15px',
                                    border: '2px solid black',
                                    borderRadius: '6px',
                                    padding: '10px',
                                    width: '100px',
                                    height: '40px',
                                    fontFamily: "'Telegraf Regular 400', sans-serif"
                                }}
                            >
                                <button
                                    style={{

                                        border: 'none',
                                        backgroundColor: 'transparent',
                                        cursor: 'pointer',
                                        marginRight: '5px',
                                        fontSize: '15px',
                                        color: 'black',
                                        fontFamily: "'Telegraf Regular 400', sans-serif"
                                    }}
                                    onClick={handleDecreaseQuantity}

                                // onClick={() => {
                                //     setSelectedQuantity(selectedQuantity - 1)
                                // }}
                                >
                                    -
                                </button>
                                <span style={{ flex: 1, textAlign: 'center', color: 'black', fontFamily: "'Telegraf Regular 400', sans-serif" }}>{selectedQuantity}</span>
                                <button
                                    style={{
                                        border: 'none',
                                        backgroundColor: 'transparent',
                                        cursor: 'pointer',
                                        marginLeft: '5px',
                                        fontSize: '15px',
                                        color: 'black',
                                        fontFamily: "'Telegraf Regular 400', sans-serif"
                                    }}
                                    onClick={handleIncreaseQuantity}

                                // onClick={() => {
                                //     setSelectedQuantity(selectedQuantity + 1)
                                // }}
                                >
                                    +
                                </button>

                            </div>

                        </div>
                    </div>
                    <Typography variant="h6" marginTop="15px" style={{ fontFamily: "'Telegraf Regular 400', sans-serif" }}>
                        <span className="color21">Available: 12</span>
                    </Typography>

                    <Box
                        display="flex"
                        marginTop="40px"
                        gap="20px"
                        fontFamily="'Telegraf Regular 400', sans-serif"
                    >
                        <Typography fontSize="15px">
                            <span class={styles.bgcolor5}>
                                {/* onClick={handleAddToCart} */}
                                Add to cart
                            </span>
                        </Typography>
                        <Typography fontSize="15px">
                            <span class={styles.bgcolor5} onClick={navigateToBuy}>
                                Buy Now
                            </span>
                        </Typography>
                    </Box>

                    <Box
                        display="flex"
                        justifyContent="-moz-initial"
                        marginTop="30px"
                        gap="10px"
                    >

                        <div className={styles.socialIcon}>
                            <span><FontAwesomeIcon icon={faFacebookF} /></span>
                        </div>
                        <div className={styles.socialIcon}>
                            <span><Instagram /></span>
                        </div>
                        <div className={styles.socialIcon}>
                            <span><Twitter /></span>
                        </div>

                    </Box>
                </Box>
            </Box >
        </div >
    );
}
