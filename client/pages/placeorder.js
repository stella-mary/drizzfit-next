import React, { useState, useEffect } from "react";
import PlaceOrderNavbar from "@/components/PlaceOrder/PlaceOrderNavbar";
import PlaceOrderAddress from "@/components/PlaceOrder/PlaceOrderAddress";
import PlaceOrderFooter from "@/components/PlaceOrder/PlaceOrderFooter";
import PlaceOrderMobile from "@/components/PlaceOrder/PlaceOrderMobile";
import PlaceOrderPayment from "@/components/PlaceOrder/PlaceOrderPayment";
import PlaceOrderSummary from "@/components/PlaceOrder/PlaceOrderSummary";
import PlaceOrderStepper from "@/components/PlaceOrder/PlaceOrderStepper";
import styles from "@/styles/PlaceOrder.module.css";
import axios from "axios";
import PlaceOrderMobileOTP from "@/components/PlaceOrder/PlaceOrderMobileOTP";

const PlaceOrderPage = ({ selectedQuantity, setSelectedQuantity }) => {

  const [groupedProductDetails, setGroupedProductDetails] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [selectedDescription, setSelectedDescription] = useState("");

  const subtotal = selectedQuantity * (selectedProduct.price || 0);
  console.log("selectedQuantity" + selectedQuantity)
  console.log("subtotal" + subtotal)

  // currentActiveStep
  const [currentActiveStep, setCurrentActiveStep] = useState(2);

  //  step 1 state and validation
  const [mobileNumber, setMobileNumber] = useState("");
  const [allStep1InputsValid, setAllStep1InputsValid] = useState(false);

  const validateStep1Data = () => {
    if (validateMobileNumber()) {
      //mobileNumber not empty && mobile number contains only number && contains 10 digits)
      setAllStep1InputsValid(true);
    }
    setIsContinueButtonEnabled(false);
  };

  // step 2 state
  const [homeAddress, setHomeAddress] = useState("");

  const [isContinueButtonEnabled, setIsContinueButtonEnabled] = useState(false);

  const validateMobileNumber = (mobile) => {
    if (mobile === "") return false;
    return true;
  };

  const updateMobileNumber = (mobileNumber) => {
    if (validateMobileNumber(mobileNumber)) {
      setMobileNumber(mobileNumber);
      validateStep1Data();
    }
  };

  const updateActiveStep = (newStepNumber) => {
    setCurrentActiveStep(newStepNumber);
  };

  const handleContinueButtonClick = () => {
    // Mobile Nmber validation
    switch (activeStep) {
      case 1:
        validateStep1Data();
    }
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



  return (
    <div>
      {/* <PlaceOrderNavbar /> */}
      <div className={styles.PlaceOrderContainer}>
        <div className={styles.PlaceOrderContainer1}>
          <PlaceOrderStepper activeStep={currentActiveStep} />
          {currentActiveStep == 1 ? (
            validateMobileNumber(mobileNumber) ? (
              <PlaceOrderMobileOTP />
            ) : (
              <PlaceOrderMobile updateMobileNumber />
            )
          ) : (
            <div></div>
          )}
          {currentActiveStep == 2 ? <PlaceOrderAddress /> : <div></div>}
          {currentActiveStep == 3 ? <PlaceOrderPayment /> : <div></div>}
          <PlaceOrderFooter
            isContinueButtonEnabled
            handleContinueButtonClick={handleContinueButtonClick}
          />
        </div>
        <div className={styles.PlaceOrderContainer2}>
          <PlaceOrderSummary
            setSelectedQuantity={setSelectedQuantity}
            productName={selectedProduct.name}
            productDescription={selectedProduct.description}
            selectedQuantity={selectedQuantity}
            productPrice={selectedProduct.price}
            subtotal={subtotal}
          />
        </div>
      </div>
    </div>
  );
};

export default PlaceOrderPage;
