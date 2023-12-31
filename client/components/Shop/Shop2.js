import React, { useContext, useEffect, useState } from "react";
import styles from "@/styles/Shop1.module.css";
import axios from "axios";
import { useMediaQuery } from "@mui/material";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import BuyPage from "../Buy";
import AppContext from "../AppContext";
import CloseIcon from "@mui/icons-material/Close";

const Shop2 = () => {
  const context = useContext(AppContext);
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [groupedProductDetails, setGroupedProductDetails] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [selectedDescription, setSelectedDescription] = useState("");
  const [size, setSize] = useState("Medium");
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to open/close the sidebar
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  useEffect(() => {
    axios.get(`${process.env.BASE_URL}/product/all`).then((response) => {
      const groupedProducts = {};
      response.data.forEach((product) => {
        if (!groupedProducts[product.name]) {
          groupedProducts[product.name] = [];
        }
        groupedProducts[product.name].push(product);
      });
      setGroupedProductDetails(groupedProducts);

      // Assuming the first product in the first group is the selected product
      if (groupedProducts[Object.keys(groupedProducts)[0]]) {
        console.log(
          "Selected product: ",
          groupedProducts[Object.keys(groupedProducts)[0]][1]
        );
        setSelectedProduct(groupedProducts[Object.keys(groupedProducts)[0]][1]);
        setSelectedDescription(
          groupedProducts[Object.keys(groupedProducts)[0]][1].description
        );
      }
    });
  }, []);

  const handleDescriptionChange = (event) => {
    const newDescription = event.target.value;
    setSelectedDescription(newDescription);
    const selectedProductGroup = groupedProductDetails[selectedProduct.name];
    const selectedProductWithDescription = selectedProductGroup.find(
      (product) => product.description === newDescription
    );
    setSelectedProduct(selectedProductWithDescription);
  };

  return (
    <div className={styles.shop1Sub}>
      <div className={styles.h1}>{selectedProduct.name}</div>
      <div className={styles.h2}>₹{selectedProduct.price}</div>
      <div className={styles.footnote}>* inclusive of all taxes</div>
      <div className={styles.size}>
        {groupedProductDetails[selectedProduct.name]?.map((product) => (
          <label key={product._id} className={styles.customfont}>
            <input
              type="radio"
              value={product.description}
              name="productDescription"
              style={{ marginRight: "5px" }}
              onChange={handleDescriptionChange}
              defaultChecked={product.description === size}
            />
            <span style={{ verticalAlign: "middle" }}>
              {product.description}
            </span>
          </label>
        ))}
      </div>
      <div className={styles.boxnote}>
        <div className={styles.boxnoteh1}>What does this pack contain ?</div>
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
      </div>{" "}
      <div className={styles.shop1SubSub}>
        <input
          type="number"
          id="quantity"
          name="quantity"
          min="1"
          max="100"
          value={selectedQuantity}
          onChange={(e) => setSelectedQuantity(e.target.value)}
          className={styles.inputQuantity}
          onBlur={(e) => {
            e.target.style.border = "none";
          }}
        />
        <div
          className={styles.button}
          onClick={openSidebar}
          style={{
            "&:hover": {
              cursor: "pointer",
            },
          }}
        >
          <div className={styles.button1}>
            <CardGiftcardIcon style={{ verticalAlign: "middle" }} /> BUY NOW
          </div>
        </div>
      </div>
      {isSidebarOpen && (
        <div className={`${styles.sidebar} ${styles.open}`}>
          <div className={styles.closeButton} onClick={closeSidebar}>
            <CloseIcon />
          </div>
          <BuyPage
            selectedQuantity={selectedQuantity}
            setSelectedQuantity={setSelectedQuantity}
            selectedDescription={selectedDescription}
            selectedProduct={selectedProduct}
          />
        </div>
      )}
    </div>
  );
};

export default Shop2;
