import React, { useEffect, useState } from "react";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import styles from "@/styles/Shop1.module.css";
import axios from "axios";
import { useMediaQuery } from "@mui/material";

import "react-responsive-carousel/lib/styles/carousel.min.css";
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
import ClearIcon from "@mui/icons-material/Clear";
import PlaceOrderMenu from "../PlaceOrder/PlaceOrderMenu";
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    className: styles.imageContainer1,
  },
  {
    className: styles.imageContainer2,
  },
  {
    className: styles.imageContainer3,
  },
  {
    className: styles.imageContainer4,
  },
  {
    className: styles.imageContainer5,
  },
  {
    className: styles.imageContainer6,
  },

];


const Shop1 = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [groupedProductDetails, setGroupedProductDetails] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [selectedDescription, setSelectedDescription] = useState("");
  const orderDate = new Date();
  const [orderId, setOrderId] = useState();
  const [state, setState] = useState({ right: false });
  const [openDialog, setOpenDialog] = useState(false);
  const [finalQuantity, setFinalQuantity] = useState(selectedQuantity);
  const [size, setSize] = useState();
  const isNonMobile = useMediaQuery("(max-width: 768px)");


  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

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

  const navigateToPlaceOrderMenu = () => {
    axios
      .post(`${process.env.BASE_URL}/orderitem/add`, {
        orderId: orderId,
        quantity: selectedQuantity,
        priceAtOrder: selectedProduct.price,
        productId: selectedProduct.productId,
      })
      .then((response) => console.log("orderItems Response: ", response.data));
    setOpenDialog(true);
  };

  const handleBuyNow = () => {
    toggleDrawer("right", true)();
    axios
      .post(`${process.env.BASE_URL}/order/add`, {
        orderDate: orderDate,
        status: "Added to cart",
        billingAddress: "",
        customerId: "",
      })
      .then((response) => {
        console.log("Order Response: ", response.data);
        console.log("orderId: ", response.data.orderId);
        setOrderId(response.data.orderId);
        // axios
        //   .post("http://localhost:1992/orderitem/add", {
        //     orderId: response.data.orderId,
        //     quantity: selectedQuantity,
        //     priceAtOrder: selectedProduct.price,
        //     productId: selectedProduct.productId,
        //   })
        //   .then((response) =>
        //     console.log("orderItems Response: ", response.data)
        //   );
      });
  };

  const toggleDrawer = (anchor, open) => () => {
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 450,
        // background: "#fee600",
        fontFamily: "'Telegraf UltraBold 800', sans-serif",
        height: "100vh",
        padding: "10px",
      }}
      width={isNonMobile ? "450" : "10"}

      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem
          style={{
            display: "flex",
          }}
        >
          <span style={{ marginRight: "auto", textAlign: 'center' }}>YOUR CART</span>
          <ClearIcon onClick={toggleDrawer(anchor, false)} />
        </ListItem>
      </List>
      <List>
        <ListItem disablePadding>
          <ListItemIcon
            style={{
              display: "flex",
              alignItems: "flex-start", // Align vertically to the start (top)
              gap: "20px",
              padding: "10px",
              width: "100%",
              marginTop: "5%",
            }}
          >
            <div
              className={styles.imageContainer7}
              style={{ alignSelf: "center" }}
            ></div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start", // Align text to the start (left)
                gap: "10px",
                textAlign: "left", // Add left alignment
              }}
            >
              <div
                style={{
                  fontFamily: "'Telegraf UltraBold 800', sans-serif",
                  fontSize: "16px",
                  color: "black", // Set font color
                }}
              >
                {" "}
                {selectedProduct.name}
              </div>
              <div
                style={{
                  color: "#000000",
                  // display: "block",
                  fontSize: "14px",
                  fontFamily: "'Telegraf Regular 400', sans-serif",
                  // fontWeight: "normal",
                }}
              >
                {selectedProduct.description}
              </div>
              <table
                style={{
                  fontSize: "14px",
                  width: "100%", // Adjust the width as needed
                  border: "1px solid #cccccc",
                  borderRadius: "5px",
                  paddingLeft: '10px',
                  paddingRight: '10px',
                  margin: "0 auto", // Center the table
                }}
              >
                <tr>
                  <td style={{ textAlign: "center" }}>
                    <button
                      style={{
                        border: "none",
                        backgroundColor: "transparent",
                        cursor: "pointer",
                        fontSize: "14px",
                        color: "black",
                        marginTop: '5px',
                        marginBottom: '5px',
                        fontFamily: "'Telegraf UltraBold 800', sans-serif",
                        fontSize: '15px',
                        color: '#cccccc'
                      }}
                      onClick={handleDecreaseQuantity}
                    >
                      -
                    </button>
                  </td>
                  <td style={{ borderRight: 'solid 2px #cccccc' }}></td>
                  <td style={{
                    textAlign: "center", fontSize: '15px', color: "black", marginTop: '10px', marginBottom: '5px',
                    fontFamily: "'Telegraf Regular 400', sans-serif", fontSize: "14px", paddingLeft: '5px', paddingRight: '5px'
                  }}>
                    {selectedQuantity}
                  </td>
                  <td style={{ borderRight: 'solid 2px #cccccc' }}></td>

                  <td style={{
                    textAlign: "center", marginTop: '5px',
                    marginBottom: '5px', fontSize: '15px'
                  }}>
                    <button
                      style={{
                        border: "none",
                        backgroundColor: "transparent",
                        cursor: "pointer",
                        fontSize: "14px",
                        color: "#cccccc",
                        fontFamily: "'Telegraf UltraBold 800', sans-serif",
                        fontSize: '20px'
                      }}
                      onClick={handleIncrease}
                    >
                      +
                    </button>
                  </td>
                </tr>
              </table>


            </div>
            <div
              style={{
                marginTop: "70px",
                marginLeft: "100px",
                fontFamily: "'Telegraf Regular 400', sans-serif",
                fontSize: "15px",
                color: "black", // Set font color
              }}
            >
              ₹{selectedProduct.price}
            </div>
          </ListItemIcon>
          <ListItemText />
        </ListItem>
        <Divider />
      </List>
      <List>
        <ListItem
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            fontFamily: "'Telegraf Regular 400', sans-serif",
          }}
        >
          <input style={{
            fontFamily: "'Telegraf UltraBold 800', sans-serif",
            // backgroundColor: "black",
            color: "white",
            width: "100%",
            padding: '10px',
            fontSize: "14px",
          }}
            type="text" placeholder="e.g. Discount Code" ></input>
          {/* <TextField
            label="e.g. Discount Code"
            variant="outlined"
            size="small"
            style={{
              width: "320px",
              fontFamily: "'Telegraf Regular 400', sans-serif",
            }}
          /> */}
          <Button
            variant="contained"
            color="primary"
            style={{
              fontFamily: "'Telegraf UltraBold 800', sans-serif",
              backgroundColor: "black",
              color: "white",
              width: "100px",
              padding: '10px',
              fontSize: "14px",
            }}
          >
            Apply
          </Button>
        </ListItem>
      </List>
      <Divider style={{ marginTop: "12rem", marginBottom: '-3rem' }} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "5px",
          // marginTop: "auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              fontFamily: "'Telegraf UltraBold 800', sans-serif",
              fontSize: "16px",
              marginBottom: '-25%'
            }}
          >
            SUBTOTAL
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "'Telegraf UltraBold 800', sans-serif",
              fontSize: "16px",
              marginBottom: '-25%'
            }}
          >
            ₹ {selectedQuantity * selectedProduct.price}
          </Typography>
        </Box>
        <Button
          variant="contained"
          color="primary"
          sx={{
            fontFamily: "'Telegraf UltraBold 800', sans-serif",
            textTransform: "none",
            marginTop: "20%",
            width: "100%",
            fontSize: "16px",
            backgroundColor: "#ff9900",
            "&:hover": {
              backgroundColor: "#ff9900",
            },
          }}
          onClick={navigateToPlaceOrderMenu}
        >
          PLACE ORDER
        </Button>
      </Box>
    </Box >
  );

  return (
    <div className={styles.shop1}>
      <div className={styles.shop1Main}>
        <Box sx={{ maxWidth: 750, flexGrow: 1 }}>
          <AutoPlaySwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
            infiniteLoop

          >
            {images.map((image, index) => (
              <div
                key={index}
                className={image.className}
              >
              </div>
            ))}
          </AutoPlaySwipeableViews>
          <MobileStepper
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
                style={{
                  backgroundColor: '#e8e8e8', // Set the background color to grey
                  color: 'white',
                  padding: '10px',
                  borderRadius: '50%', // Add border-radius for a circular button
                }}
              >
                {theme.direction === 'rtl' ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button size="small" onClick={handleBack} disabled={activeStep === 0} style={{
                backgroundColor: '#e8e8e8', // Set the background color to grey
                color: 'white',
                padding: '10px',
                borderRadius: '50%', // Add border-radius for a circular button
              }}>
                {theme.direction === 'rtl' ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}

              </Button>
            }
          />
        </Box>

        <div className={styles.shop1Sub}>
          <div className={styles.h1}>{selectedProduct.name}</div>
          <div className={styles.h2}>₹{selectedProduct.price}</div>
          <div className={styles.footnote}>* inclusive of all taxes</div>
          <div className={styles.size}>
            {groupedProductDetails[selectedProduct.name]?.map((product) => (
              <label
                key={product._id}
                className={styles.customfont}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginRight: '20px',
                }}
              >
                <input
                  type="radio"
                  value={product.description}
                  name="productDescription"
                  style={{ marginRight: '5px' }}
                  onChange={handleDescriptionChange}
                  defaultChecked={product.description === size} // Set to true if this is the default value
                />

                <span style={{ verticalAlign: 'middle' }}>{product.description}</span>
              </label>
            ))}
          </div>
          <div className={styles.boxnote}>
            <div className={styles.boxnoteh1}>
              What does this pack contain ?
            </div>
            <div className={styles.boxnotePara}>
              1 Menstrual Cup with Cotton Pouch
            </div>
            <div className={styles.boxnotePara}>
              The Drizzfit Menstrual Cup is a perfect option for you to go all
              sustainable during your cycle. Our cups are:
            </div>
            <div className={styles.list}>
              <li>100 % Medical Grade Silicone</li>
              <li>BPA Free | Latex Free</li>
              <li>Made in FDA Approved Plant</li>
              <li>Reusable upto 8 years</li>
            </div>
            <div className={styles.boxnotePara}>
              <b>Size Guide</b>
            </div>
            <div className={styles.boxnotePara}>
              Drizzfit Menstrual Cups comes in 3 sizes
            </div>
            <div className={styles.boxnotePara}>
              <b>Small(S)</b> – Perfect if you are under 18 years of age
            </div>
            <div className={styles.boxnotePara1}>
              <b>Mediumn (M)</b> – Perfect if you are above 18 years // or gave
              birth via C - section
            </div>
            <div className={styles.boxnotePara1}>
              <b>Large (L)</b> – Perfect if you have given birth vaginally
            </div>
          </div>
          <div className={styles.shop1SubSub}>
            <input
              type="number"
              id="quantity"
              name="quantity"
              min="1"
              max="100"
              value={selectedQuantity}
              onChange={(e) => setSelectedQuantity(e.target.value)}
              style={{
                border: "none",
                width: "85%",
                marginTop: "20px",
                padding: "10px",
                background: "black",
                color: "white",
                fontSize: "15px",
                textAlign: "center",
                outline: "none",
              }}
              onBlur={(e) => {
                e.target.style.border = "none";
              }}
            />
            <div
              className={styles.button}
              onClick={handleBuyNow}
              style={{
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  textAlign: "center",
                }}
              >
                <CardGiftcardIcon style={{ verticalAlign: "middle" }} /> BUY NOW
              </div>
            </div>
          </div>
        </div>
      </div>
      <Drawer
        anchor="right" // Open the drawer from the right side
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
      >
        {list("right")}
      </Drawer>
      <PlaceOrderMenu
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        orderId={orderId}
        openDialog={openDialog}
      />
    </div>
  );
};

export default Shop1;
