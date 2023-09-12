import React, { useEffect, useState, useRef } from "react";
import styles from "@/styles/Shop1.module.css";
import axios from "axios";
import { useMediaQuery } from "@mui/material";
import { useRouter } from "next/router"
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Shop2 = () => {
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [groupedProductDetails, setGroupedProductDetails] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [selectedDescription, setSelectedDescription] = useState("");
  const [orderId, setOrderId] = useState();
  const [state, setState] = useState({ right: true });
  const [finalQuantity, setFinalQuantity] = useState(selectedQuantity);
  const [size, setSize] = useState();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [discountCode, setDiscountCode] = useState("");


  const router = useRouter();





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

  return (
    <div className={styles.shop1Sub}>
      <div className={styles.h1}>{selectedProduct.name}</div>
      <div className={styles.h2}>₹{selectedProduct.price}</div>
      <div className={styles.footnote}>* inclusive of all taxes</div>
      <div className={styles.size}>
        {groupedProductDetails[selectedProduct.name]?.map((product) => (
          <label
            key={product._id}
            className={styles.customfont}
          >
            <input
              type="radio"
              value={product.description}
              name="productDescription"
              style={{ marginRight: '5px' }}
              onChange={handleDescriptionChange}
              defaultChecked={product.description === size} />
            <span style={{ verticalAlign: 'middle' }}>{product.description}</span>
          </label>
        ))}
      </div>
      <div className={styles.boxnote}>
        <div className={styles.boxnoteh1}>What does this pack contain ?</div>
        <div className={styles.boxnotePara}>1 Menstrual Cup with Cotton Pouch</div>
        <div className={styles.boxnotePara}>The Drizzfit Menstrual Cup is a perfect option for you to go all
          sustainable during your cycle. Our cups are:</div>
        <div className={styles.list}>
          <li>100 % Medical Grade Silicone</li>
          <li>BPA Free | Latex Free</li>
          <li>Made in FDA Approved Plant</li>
          <li>Reusable upto 8 years</li>
        </div>
        <div className={styles.boxnotePara}><b>Size Guide</b></div>
        <div className={styles.boxnotePara}>Drizzfit Menstrual Cups comes in 3 sizes</div>
        <div className={styles.boxnotePara}><b>Small(S)</b> – Perfect if you are under 18 years of age</div>
        <div className={styles.boxnotePara1}><b>Mediumn (M)</b> – Perfect if you are above 18 years // or gave birth via C - section</div>
        <div className={styles.boxnotePara1}><b>Large (L)</b> – Perfect if you have given birth vaginally</div>
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
          className={styles.inputQuantity}
          onBlur={(e) => {
            e.target.style.border = "none";
          }}
        />
        <div
          className={styles.button}

          style={{
            "&:hover": {
              cursor: "pointer",
            },
          }}>
          <div className={styles.button1}>
            <CardGiftcardIcon style={{ verticalAlign: "middle" }} /> BUY NOW
          </div>
        </div>
      </div>

    </div>

  );
};

export default Shop2;
