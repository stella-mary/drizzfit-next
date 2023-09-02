import React, { useEffect, useState } from "react";
import styles from "@/styles/Shop1.module.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import axios from "axios";
import { Carousel } from "react-responsive-carousel";
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
import PlaceOrder from "./PlaceOrder";

const Shop1 = () => {
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

  const labelStyle = {
    fontFamily: "Telegraf UltraBold 800, sans-serif",
    fontSize: "16px",
  };

  const handleDecreaseQuantity = () => {
    if (selectedQuantity > 1) {
      setSelectedQuantity(selectedQuantity - 1);
    }
  };

  const handleIncreaseQuantity = () => {
    setSelectedQuantity(selectedQuantity + 1);
  };

  const navigateToPlaceOrder = () => {
    axios
      .post("http://localhost:1992/orderitem/add", {
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
      .post("http://localhost:1992/order/add", {
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
        width: anchor === "top" || anchor === "bottom" ? "auto" : 400,
        // background: "#fee600",
        fontFamily: "'Telegraf UltraBold 800', sans-serif",
        height: "100vh",
        padding: "10px",
      }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem
          style={{
            display: "flex",
            alignItems: "center", // Align vertically
            justifyContent: "center", // Align horizontally
            textAlign: "center",
          }}
        >
          <span style={{ marginRight: "auto" }}>YOUR CART</span>
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
                  fontFamily: "'Telegraf Regular 400', sans-serif",
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
                  display: "block",
                  fontSize: "14px",
                  fontWeight: "normal",
                }}
              >
                {selectedProduct.description}
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "14px",
                  marginTop: "25px",
                  border: "2px solid black",
                  borderRadius: "6px",
                  padding: "10px",
                  width: "100px",
                  height: "40px",
                  fontFamily: "'Telegraf UltraBold 800', sans-serif",
                }}
              >
                <button
                  style={{
                    border: "none",
                    backgroundColor: "transparent",
                    cursor: "pointer",
                    marginRight: "5px",
                    fontSize: "14px",
                    color: "black",
                    fontFamily: "'Telegraf UltraBold 800', sans-serif",
                  }}
                  onClick={handleDecreaseQuantity}
                >
                  -
                </button>
                <span
                  style={{
                    flex: 1,
                    textAlign: "center",
                    color: "black",
                    fontFamily: "'Telegraf Regular 400', sans-serif",
                    fontSize: "14px",
                  }}
                  value={finalQuantity}
                  onChange={(e) => setFinalQuantity(e.target.value)}
                >
                  {selectedQuantity}
                </span>
                <button
                  style={{
                    border: "none",
                    backgroundColor: "transparent",
                    cursor: "pointer",
                    marginLeft: "5px",
                    fontSize: "14px",
                    color: "black",
                    fontFamily: "'Telegraf UltraBold 800', sans-serif",
                  }}
                  onClick={handleIncreaseQuantity}
                >
                  +
                </button>
              </div>
            </div>
            <div
              style={{
                marginTop: "100px",
                marginLeft: "70px",
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
            gap: "10px",
            fontFamily: "'Telegraf Regular 400', sans-serif",
          }}
        >
          <TextField
            label="e.g. Discount Code"
            variant="outlined"
            size="small"
            style={{
              width: "320px",
              fontFamily: "'Telegraf Regular 400', sans-serif",
            }}
          />
          <Button
            variant="contained"
            color="primary"
            style={{
              fontFamily: "'Telegraf UltraBold 800', sans-serif",
              backgroundColor: "black",
              color: "white",
              width: "100px",
              fontSize: "14px",
            }}
          >
            Apply
          </Button>
        </ListItem>
      </List>
      <Divider style={{ marginTop: "7rem" }} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "5px",
          marginTop: "auto",
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
            }}
          >
            SUBTOTAL
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "'Telegraf UltraBold 800', sans-serif",
              fontSize: "16px",
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
            marginTop: "20px",
            width: "100%",
            fontSize: "16px",
            backgroundColor: "#ff9900",
            "&:hover": {
              backgroundColor: "#ff9900",
            },
          }}
          onClick={navigateToPlaceOrder}
        >
          PLACE ORDER
        </Button>
      </Box>
    </Box>
  );

  return (
    <div className={styles.shop1}>
      <div className={styles.shop1Main}>
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          className={styles.carouselContainer}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <>
                <button
                  type="button"
                  onClick={onClickHandler}
                  title={label}
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "20px",
                    fontSize: "24px",
                    backgroundColor: "white",
                    color: "black",
                    cursor: "pointer",
                    border: "none",
                  }}
                >
                  {"<"}
                </button>
              </>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                style={{
                  position: "absolute",
                  top: "90%",
                  left: "20px", // Adjust this value to align the button as desired
                  fontSize: "24px",
                  backgroundColor: "white",
                  borderRadius: "50%",
                  padding: "10px",
                  color: "black",
                  cursor: "pointer",
                  border: "none",
                }}
              >
                &rarr; {/* HTML entity for right arrow */}
              </button>
            )
          }
        >
          <div className={styles.imageContainer1}></div>
          <div className={styles.imageContainer2}></div>
          <div className={styles.imageContainer3}></div>
          <div className={styles.imageContainer4}></div>
          <div className={styles.imageContainer5}></div>
          <div className={styles.imageContainer6}></div>
        </Carousel>

        <div className={styles.shop1Sub}>
          <div className={styles.h1}>{selectedProduct.name}</div>
          <div className={styles.h2}>₹{selectedProduct.price}</div>
          <div className={styles.footnote}>* inclusive of all taxes</div>
          <div className={styles.size}>
            {/* <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                value={selectedDescription}
                onChange={handleDescriptionChange}
              >
                {groupedProductDetails[selectedProduct.name]?.map((product) => (
                  <FormControlLabel
                    key={product._id}
                    value={product.description}
                    control={<Radio />}
                    label={product.description}
                    className={styles.customfont} // Apply the custom font class here
                  />
                ))}
              </RadioGroup>
            </FormControl> */}
            <input type="radio" name="size" value="Large" onChange={e => setSize(e.target.value)} />Large
            <input type="radio" name="size" value="Small" onChange={e => setSize(e.target.value)} />Small
            <input type="radio" name="size" value="Extra Large" onChange={e => setSize(e.target.value)} />Extra Large
          </div>
          <div className={styles.boxnote}>
            <div className={styles.boxnoteh1}>
              What does this pack contain ?
            </div>
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
            <div className={styles.boxnotePara}>
              <b>Size Guide</b>
            </div>
            <div className={styles.boxnotePara}>
              Plush Menstrual Cups comes in 3 sizes
            </div>
            <div className={styles.boxnotePara}>
              <b>Extra Small(XS)</b> – Perfect if you are under 18 years of age
            </div>
            <div className={styles.boxnotePara1}>
              <b>Small (S)</b> – Perfect if you are above 18 years // or gave
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
                width: "40%",
                marginTop: '20px',
                padding: "10px",
                background: "#f2f4f8",
                fontSize: "20px",
                color: "#252b2f",
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
              Buy Now
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
      <PlaceOrder
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        orderId={orderId}
        openDialog={openDialog}
      />
    </div>
  );
};

export default Shop1;
