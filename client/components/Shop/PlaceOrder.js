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
  // console.log("selectedQuantity" + selectedQuantity);
  // console.log("subtotal" + subtotal);
  // console.log("Selected Product: ", selectedProduct);

  const router = useRouter();

  // currentActiveStep
  const [currentActiveStep1, setCurrentActiveStep1] = useState(0);
  const [currentActiveStep, setCurrentActiveStep] = useState(1);
  const [currentStep1Part, setCurrentStep1Part] = useState(1);

  //  step 1 state and validation
  const [mobileNumber, setMobileNumber] = useState("");
  const [allStep1InputsValid, setAllStep1InputsValid] = useState(false);

  const [allStep2InputsValid, setAllStep2InputsValid] = useState(false);
  const [isMobileNumberEditing, setIsMobileNumberEditing] = useState(false);

  const [customerId, setCustomerId] = useState();

  const handleNextClick = () => {
    // Move to the next step
    setCurrentActiveStep(currentActiveStep + 1);
  };

  const handleGoToStep2 = () => {
    setCurrentActiveStep(1);
  };

  const updateMobileNumber = (mobileNumber) => {
    setMobileNumber(mobileNumber);
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

  const [editedMobileNumber, setEditedMobileNumber] = useState(mobileNumber);

  const handleEdit = () => {
    setIsMobileNumberEditing(true);
    setEditedMobileNumber(mobileNumber);
  };

  const updateEditedMobileNumber = (editedMobileNumber) => {
    setEditedMobileNumber(editedMobileNumber);
  };

  return (
    <div>
      <div className={styles.PlaceOrderContainer}>
        <div className={styles.PlaceOrderContainer1}>
          <PlaceOrderStepper activeStep={currentActiveStep} />
          {currentActiveStep == 1 ? (
            currentStep1Part === 1 ? (
              <PlaceOrderMobile
                updateMobileNumber={updateMobileNumber}
                updateEditedMobileNumber={updateEditedMobileNumber}
                selectedProduct={selectedProduct}
                selectedQuantity={selectedQuantity}
                editedMobileNumber={editedMobileNumber}
                handleNextClick={handleNextClick}
                setEditedMobileNumber={setEditedMobileNumber}
                setCurrentStep1Part={setCurrentStep1Part}
                setMobileNumber={setMobileNumber}
                mobileNumber={mobileNumber}
              />
            ) : (
              currentStep1Part === 2 && (
                <PlaceOrderMobileOTP
                  mobileNumber={mobileNumber}
                  handleClick={handleNextClick}
                  handleEdit={handleEdit}
                  setIsMobileNumberEditing={setIsMobileNumberEditing}
                  setCurrentStep1Part={setCurrentStep1Part}
                  selectedProduct={selectedProduct}
                  selectedQuantity={selectedQuantity}
                  setCustomerId={setCustomerId}
                />
              )
            )
          ) : (
            <div></div>
          )}

          {currentActiveStep === 2 ? (
            <PlaceOrderAddress
              goToStep1={handleGoToStep2}
              mobileNumber={mobileNumber}
              handleClick={handleNextClick}
              customerId={customerId}
            />
          ) : (
            <div></div>
          )}

          {currentActiveStep == 3 ? (
            <PlaceOrderPayment mobileNumber={mobileNumber} />
          ) : (
            <div></div>
          )}
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
