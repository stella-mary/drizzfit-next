import React, { useState, useEffect } from "react";
import PlaceOrderNavbar from "@/components/PlaceOrder/PlaceOrderNavbar";
import PlaceOrderAddress from "@/components/PlaceOrder/PlaceOrderAddress";
import PlaceOrderFooter from "@/components/PlaceOrder/PlaceOrderFooter";
import PlaceOrderMobile from "@/components/PlaceOrder/PlaceOrderMobile";
import PlaceOrderPayment from "@/components/PlaceOrder/PlaceOrderPayment";
import PlaceOrderSummary from "@/components/PlaceOrder/PlaceOrderSummary";
import PlaceOrderStepper from "@/components/PlaceOrder/PlaceOrderStepper";
import styles from "@/styles/PlaceOrder.module.css";
import PlaceOrderMobileOTP from "@/components/PlaceOrder/PlaceOrderMobileOTP";
import PlaceOrderAddress1 from "@/components/PlaceOrder/PlaceOrderAddress1";
import { useRouter } from "next/router";

const PlaceOrderPage = ({
  selectedQuantity,
  setSelectedQuantity,
  selectedProduct,
}) => {
  const subtotal = selectedQuantity * (selectedProduct.price || 0);
  console.log("selectedQuantity" + selectedQuantity);
  console.log("subtotal" + subtotal);
  console.log("Selected Product: ", selectedProduct);

  const router = useRouter();

  // currentActiveStep
  const [currentActiveStep, setCurrentActiveStep] = useState(1);

  //  step 1 state and validation
  const [mobileNumber, setMobileNumber] = useState("");
  const [allStep1InputsValid, setAllStep1InputsValid] = useState(false);

  const [allStep2InputsValid, setAllStep2InputsValid] = useState(false);

  const handleNextClick = () => {
    // Move to the next step
    setCurrentActiveStep(currentActiveStep + 1);
  };

  const handleGoToStep1 = () => {
    setCurrentActiveStep(currentActiveStep - 1);
    // router.push("/PlaceOrderMobile");
    // setCurrentStep(1); // Assuming 1 represents "step1"
  };

  const handleGoToStep2 = () => {
    setCurrentActiveStep(1);
    // router.push("/PlaceOrderMobile");
    // setCurrentStep(1); // Assuming 1 represents "step1"
  };

  const updateMobileNumber = (mobileNumber) => {
    setMobileNumber(mobileNumber);
  };

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
    console.log("" + mobile);
    if (mobile == "") return false;
    return true;
  };

  const updateActiveStep = (newStepNumber) => {
    setCurrentActiveStep(newStepNumber);
  };

  const handleContinueButtonClick = () => {
    // Mobile Nmber validation
    console.log("Continue btn clicked");
    switch (currentActiveStep) {
      case 1:
        // validateStep1Data();
        if (validateMobileNumber(mobileNumber)) {
          validateStep1Data();
          setCurrentActiveStep(2); // Move to step 2 (Address) when mobile number is valid
        }
    }
  };


  return (
    <div>
      <div className={styles.PlaceOrderContainer}>
        <div className={styles.PlaceOrderContainer1}>
          <PlaceOrderStepper activeStep={currentActiveStep} />
          {currentActiveStep == 1 ? (
            validateMobileNumber(mobileNumber) ? (
              <PlaceOrderMobileOTP mobileNumber={mobileNumber} goToStep1={handleGoToStep1} handleClick={handleNextClick} />
            ) : (
              <PlaceOrderMobile
                updateMobileNumber={updateMobileNumber}
                selectedProduct={selectedProduct}
                selectedQuantity={selectedQuantity}
              />
            )
          ) : (
            <div></div>
          )}


          {currentActiveStep === 2 ? <PlaceOrderAddress goToStep1={handleGoToStep2} mobileNumber={mobileNumber} handleClick={handleNextClick} /> : <div></div>}

          {currentActiveStep == 3 ? <PlaceOrderPayment mobileNumber={mobileNumber} /> : <div></div>}
          {/* <PlaceOrderFooter
            isContinueButtonEnabled
            handleContinueButtonClick={handleContinueButtonClick}
            mobileNumber={mobileNumber}
            updateMobileNumber={updateMobileNumber}
          /> */}

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
