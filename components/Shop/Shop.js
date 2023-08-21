import styles from "@/styles/Shop.module.css"
import { Box, Typography, useTheme } from "@mui/material";
import { Facebook, Instagram, Twitter } from '@mui/icons-material';
import Image from "next/image";
import { useRouter } from "next/router"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Shop() {

    return (
        <div className={styles.shop}>
            <Box
                display="flex"
                width="97%"
                alignItems="top"
                gap="1%"
                borderRadius="10px"
                paddingLeft="1%"
                paddingTop='1%'
                paddingRight='1%'
                m="20px"
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

                    <div className={styles.shopContainer2}>
                    </div>
                    <div className={styles.shopContainer3}>
                    </div>
                    <div className={styles.shopContainer4}>
                    </div>

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
                        <div className={styles.shopContainer5}>
                        </div>

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
                    <Typography backgroundColor="black" color="white" padding="5px" width="25%" borderRadius="10px" textAlign="center">In Stock</Typography>
                    <Typography variant="h5" color="#8ca3ba" marginTop="20px">NIKE</Typography>
                    <Typography variant="h3" marginTop="10px"><b>Air Jordan 270</b></Typography>
                    <Typography variant="h3" marginTop="10px" color="#2499ef">$350</Typography>


                    <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px', gap: '10px' }}>
                        <label htmlFor="sizeSelect" style={{ marginRight: '10px' }}>
                            <b>Select Size:</b>
                        </label>
                        <select
                            id="sizeSelect"
                            // value={selectedSize}
                            // onChange={handleSizeChange}
                            style={{
                                flex: '1',
                                maxWidth: '70px',
                                color: 'white',
                                backgroundColor: "transparent",
                                padding: '10px',
                                borderColor: "#3d454e",
                                borderWidth: '2px',
                                borderStyle: 'solid'
                            }}
                        >

                            <option style={{ color: 'black' }} value="M">M</option>
                            <option style={{ color: 'black' }} value="S">S</option>
                            <option style={{ color: 'black' }} value="L">L</option>
                        </select>
                        <style>{`
          select#sizeSelect option:checked {
            border-color: #3d454e;
          }
        `}</style>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px', gap: '20px' }}>
                        <Typography variant="h6" marginTop="20px"><b>Quantity:</b></Typography>
                        <div>
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    variant: 'h3',
                                    fontWeight: 400,
                                    fontSize: '15px',
                                    marginTop: '15px',
                                    border: '2px solid #2f4264',
                                    borderRadius: '6px',
                                    padding: '5px',
                                    width: '100px',
                                }}
                            >
                                <button
                                    style={{

                                        border: 'none',
                                        backgroundColor: 'transparent',
                                        cursor: 'pointer',
                                        marginRight: '5px',
                                        fontSize: '15px',
                                        color: 'white',
                                    }}

                                    onClick={() => {
                                        setSelectedQuantity(selectedQuantity - 1)
                                    }}
                                >
                                    -
                                </button>
                                {/* <span style={{ flex: 1, textAlign: 'center', color: 'white' }}>{selectedQuantity}</span> */}
                                <button
                                    style={{
                                        border: 'none',
                                        backgroundColor: 'transparent',
                                        cursor: 'pointer',
                                        marginLeft: '5px',
                                        fontSize: '15px',
                                        color: 'white',
                                    }}

                                    onClick={() => {
                                        setSelectedQuantity(selectedQuantity + 1)
                                    }}
                                >
                                    +
                                </button>

                            </div>

                        </div>
                    </div>
                    <Typography variant="h6" marginTop="20px">
                        <b>
                            <span className="color21">Available: 12</span>
                        </b>
                    </Typography>


                    <Box
                        display="flex"
                        justifyContent="-moz-initial"
                        marginTop="40px"
                        gap="20px"

                    >
                        <Typography fontSize="10px" >
                            <span class="bgcolor6">
                                {/* onClick={handleAddToCart} */}
                                <b>Add to cart</b>
                            </span>
                        </Typography>
                        <Typography fontSize="10px" >
                            <span class="bgcolor5">
                                <b>Buy Now</b>
                            </span>
                        </Typography>
                    </Box>

                    <Box
                        display="flex"
                        justifyContent="-moz-initial"
                        marginTop="30px"
                        gap="10px"
                    >

                        <div className="social-icon">
                            <span><FontAwesomeIcon /></span>
                        </div>
                        <div className="social-icon">
                            <span><Instagram /></span>
                        </div>
                        <div className="social-icon">
                            <span><Twitter /></span>
                        </div>

                    </Box>
                </Box>
            </Box >
        </div>
    );
}
