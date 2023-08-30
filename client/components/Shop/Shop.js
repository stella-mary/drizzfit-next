import React, { useEffect, useState } from "react";
import styles from "@/styles/Shop.module.css";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import {
  BorderClear,
  BorderColor,
  Facebook,
  Instagram,
  Twitter,
} from "@mui/icons-material";
import { useRouter } from "next/router";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ClearIcon from "@mui/icons-material/Clear";

export default function Shop() {
  const router = useRouter();

  const isNonMobile = useMediaQuery("(max-width: 768px)");

  const navigateToBuy = () => {
    router.push("/buy");
  };

  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [groupedProductDetails, setGroupedProductDetails] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [selectedDescription, setSelectedDescription] = useState("");
  const [state, setState] = useState({ right: false });
  const orderDate = new Date();

  const handleDecreaseQuantity = () => {
    if (selectedQuantity > 1) {
      setSelectedQuantity(selectedQuantity - 1);
    }
  };

  const handleIncreaseQuantity = () => {
    setSelectedQuantity(selectedQuantity + 1);
  };

  const handleBuyNow = () => {
    toggleDrawer("right", true)();
    axios
      .post("http://localhost:1992/order/add", {
        orderDate: orderDate,
        status: "pending",
      })
      .then((response) => {
        console.log("Order Response: ", response.data);
        axios
          .post("http://localhost:1992/orderitem/add", {
            orderId: response.data.orderId,
            quantity: selectedQuantity,
            priceAtOrder: selectedProduct.price,
            productId: selectedProduct.productId,
          })
          .then((response) =>
            console.log("orderItems Response: ", response.data)
          );
      });
  };

  const toggleDrawer = (anchor, open) => () => {
    setState({ ...state, [anchor]: open });
  };

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

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 500,
        background: "#fee600",
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
              marginTop: "10%",
            }}
          >
            <div
              className={styles.shopContainer6}
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
                  fontFamily: "'Telegraf Regular 400', sans-serif",
                  fontSize: "20px",
                  color: "black", // Set font color
                }}
              >
                {" "}
                {selectedProduct.name}
              </div>
              {/* <div
                style={{
                  fontFamily: "'Telegraf Regular 400', sans-serif",
                  fontSize: "15px",
                  color: "black", // Set font color
                }}
              >
                Large
              </div> */}
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
          alignItems: "flex-start",
          justifyContent: "space-between",
          padding: "5px",
          marginTop: "auto", // Push content to the bottom
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "20px",
            gap: "300px", // Adjust the gap value as needed
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
          }}
        >
          PLACE ORDER
        </Button>
        <Button
          variant="outlined"
          color="primary"
          sx={{
            fontFamily: "'Telegraf UltraBold 800', sans-serif",
            textTransform: "none",
            marginTop: "10px",
            width: "100%",
            backgroundColor: "transparent", // Remove background color
            textDecoration: "underline", // Remove underline style
            border: "none",
            fontSize: "16px",
          }}
        >
          CONTINUE SHOPPING
        </Button>
      </Box>
    </Box>
  );

  return (
    <div className={styles.shop}>
      <Box
        display="flex"
        width="100%"
        gap="1%"
        height="100vh"
        alignItems="top"
        flexDirection={isNonMobile ? "column" : "row"}
        // borderRadius="10px"
        paddingLeft={isNonMobile ? "5%" : "1%"}
        paddingTop={isNonMobile ? "5%" : "5%"}
        paddingRight={isNonMobile ? "5%" : "1%"}
        paddingBottom={isNonMobile ? "160%" : "1%"}
        backgroundColor="#fee600"
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: isNonMobile ? "row" : "column",
            gap: "10px",
            width: isNonMobile ? "100%" : "10%",
          }}
        >
          <div className={styles.shopContainer2}></div>
          <div className={styles.shopContainer3}></div>
          <div className={styles.shopContainer4}></div>
        </Box>

        <Box
          sx={{
            // width: "44%",
            marginTop: isNonMobile ? "10px" : "",
            width: isNonMobile ? "100%" : "44%",
            height: isNonMobile ? "100%" : "auto",
            display: "flex",
            objectFit: "cover",
            alignItems: "top",
          }}
        >
          <div className={styles.productDetails}>
            <div className={styles.shopContainer5}></div>
            <div className={styles.heartIcon}>
              {/* <div className={styles.heartIcon} style={{ backgroundColor: "yellow", padding: "10px", marginLeft: '10%', display: "flex", alignItems: "center", justifyContent: "center", borderRadius: '50px', }}> */}
              <FavoriteBorderIcon
                sx={{
                  fontSize: "30px",
                  cursor: "pointer",
                  color: "black",
                }}
              />
            </div>
          </div>
        </Box>

        <Box
          sx={{
            width: "44%",
            marginLeft: isNonMobile ? "5px" : "40px",
            // marginLeft: "40px",
            alignItems: "top",
          }}
        >
          <Typography
            backgroundColor="black"
            color="white"
            padding="10px"
            marginTop={isNonMobile ? "20px" : "auto"}
            width={isNonMobile ? "100%" : "20%"}
            // width="20%"
            borderRadius="10px"
            textAlign="center"
            style={{
              fontFamily: "'Telegraf UltraBold 800', sans-serif",
              fontSize: "13px",
            }}
          >
            In Stock
          </Typography>
          <Typography
            color="black"
            marginTop="20px"
            style={{
              fontFamily: "'Telegraf UltraBold 800', sans-serif",
              fontSize: "16px",
            }}
          >
            DRIZZFIT
          </Typography>
          <Typography
            marginTop="10px"
            width={isNonMobile ? "230%" : "auto"}
            style={{
              fontFamily: "'Telegraf UltraBold 800', sans-serif",
              fontSize: "24px",
            }}
          >
            {/* <b>Reusable Menstrual Cup</b> */}
            <b>{selectedProduct.name}</b>
          </Typography>
          <Typography
            marginTop="10px"
            color="black"
            style={{
              fontFamily: "'Telegraf UltraBold 800', sans-serif",
              fontSize: "24px",
            }}
          >
            ₹ {selectedProduct.price}
          </Typography>
          <Box
            style={{
              display: "flex",
              width: isNonMobile ? "200%" : "auto",
              alignItems: "center",
              fontFamily: "'Telegraf UltraBold 800', sans-serif",
              marginTop: "20px",
              gap: "10px",
            }}
          >
            <label
              htmlFor="sizeSelect"
              style={{
                marginRight: "10px",
                fontSize: "14px",

                fontFamily: "'Telegraf UltraBold 800', sans-serif",
              }}
            >
              Select Size:
            </label>
            <select
              id="sizeSelect"
              value={selectedDescription}
              onChange={handleDescriptionChange}
              style={{
                flex: "1",
                maxWidth: "70px",
                color: "black",
                backgroundColor: "transparent",
                padding: "10px",
                fontFamily: "'Telegraf UltraBold 800', sans-serif",
                borderWidth: "2px",
                borderStyle: "solid",
                borderColor: "black",
              }}
            >
              {groupedProductDetails[selectedProduct.name]?.map((product) => (
                <option
                  key={product._id}
                  value={product.description}
                  style={{
                    color: "black",
                    fontFamily: "'Telegraf UltraBold 800', sans-serif",
                    fontSize: "14px",
                  }}
                >
                  {product.description}
                </option>
              ))}
            </select>
          </Box>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontFamily: "'Telegraf UltraBold 800', sans-serif",
              marginTop: "20px",
              gap: "20px",
              fontSize: "14px",
            }}
          >
            <Typography
              variant="h6"
              marginTop="20px"
              style={{
                fontFamily: "'Telegraf UltraBold 800', sans-serif",
                fontSize: "14px",
              }}
            >
              Quantity:
            </Typography>
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "14px",
                  marginTop: "15px",
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

                  // onClick={() => {
                  //     setSelectedQuantity(selectedQuantity - 1)
                  // }}
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

                  // onClick={() => {
                  //     setSelectedQuantity(selectedQuantity + 1)
                  // }}
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <Box
            display="flex"
            marginTop="40px"
            width={isNonMobile ? "200%" : "auto"}
            gap="20px"
            fontFamily="'Telegraf UltraBold 800', sans-serif"
          >
            {/* <Typography
              fontSize="12px"
              fontFamily="'Telegraf UltraBold 800', sans-serif"
            >
              <span class={styles.bgcolor5}> */}
            {/* onClick={handleAddToCart} */}
            {/* Add to cart */}
            {/* </span> */}
            <Button
              variant="contained"
              color="primary"
              // onClick={toggleDrawer("right", true)}
              onClick={handleBuyNow}
              // Open the drawer from the right side
              sx={{
                fontSize: "12px",
                fontFamily: "'Telegraf UltraBold 800', sans-serif",
                textTransform: "none",
              }}
              className={styles.bgcolor5}
            >
              Buy Now
            </Button>
          </Box>
          <Drawer
            anchor="right" // Open the drawer from the right side
            open={state["right"]}
            onClose={toggleDrawer("right", false)}
          >
            {list("right")}
          </Drawer>
          <Box
            display="flex"
            justifyContent="-moz-initial"
            marginTop="30px"
            gap="10px"
          >
            <div className={styles.socialIcon}>
              <span>
                <FontAwesomeIcon icon={faFacebookF} />
              </span>
            </div>
            <div className={styles.socialIcon}>
              <span>
                <Instagram />
              </span>
            </div>
            <div className={styles.socialIcon}>
              <span>
                <Twitter />
              </span>
            </div>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
