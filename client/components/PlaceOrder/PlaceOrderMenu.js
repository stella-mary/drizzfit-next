import React, { useEffect, useState } from "react";
import styles from "@/styles/Shop.module.css";
import Dialog from "@mui/material/Dialog";
import ClearIcon from "@mui/icons-material/Clear";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import axios from "axios";

const steps = ["Mobile", "Address", "Payment"];

export default function PlaceOrderMenu({ open, onClose, orderId, openDialog }) {
    const [activeStep, setActiveStep] = useState(0);
    const [phoneNumber, setPhoneNumber] = useState();
    console.log("Order Id in place order: ", orderId);

    const handleNext = () => {
        axios
            .post(`${process.env.BASE_URL}/customer/add`, {
                phoneNumber: phoneNumber,
            })
            .then((response) => {
                console.log("Customer Response: ", response.data);
                axios
                    .put(`${process.env.BASE_URL}/order/update/${orderId}`, {
                        customerId: response.data.customerId,
                    })
                    .then((res) => console.log("Order update response: ", res.data));
            });
        // setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const handleClose = () => {
        onClose(openDialog);
    };

    return (
        <div className={styles.shop}>
            <Dialog
                open={open}
                onClose={handleClose}
                PaperProps={{
                    sx: {
                        width: "100%",
                    },
                }}
            >
                <DialogActions>
                    <ClearIcon onClick={onClose} color="primary">
                        Close
                    </ClearIcon>
                </DialogActions>

                {/* <DialogTitle>Order Placed Successfully</DialogTitle> */}
                <DialogContent>
                    <DialogContentText>
                        <Box
                            sx={{
                                width: "100%",
                                padding: "24px",
                            }}
                        >
                            <Stepper activeStep={activeStep}>
                                {steps.map((label, index) => {
                                    const stepProps = {};
                                    const labelProps = {};
                                    return (
                                        <Step key={label} {...stepProps}>
                                            <StepLabel {...labelProps}>{label}</StepLabel>
                                        </Step>
                                    );
                                })}
                            </Stepper>
                            {activeStep === steps.length ? (
                                <React.Fragment>
                                    <Typography sx={{ mt: 2, mb: 1 }}>
                                        All steps completed - you&apos;re finished
                                    </Typography>
                                    <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                                        <Box sx={{ flex: "1 1 auto" }} />
                                        <Button onClick={handleReset}>Reset</Button>
                                    </Box>
                                </React.Fragment>
                            ) : (
                                <React.Fragment>
                                    <Typography sx={{ mt: 2, mb: 1 }}>
                                        {/* Step {activeStep + 1} */}
                                    </Typography>
                                    {activeStep === 0 && (
                                        <React.Fragment>
                                            <Box sx={{ display: "flex", flexDirection: "column" }}>
                                                <Typography variant="body">
                                                    Enter Mobile Number:
                                                </Typography>
                                                <TextField
                                                    fullWidth
                                                    defaultValue="+91 | "
                                                    inputProps={{
                                                        maxLength: 18, // Including "+91 | "
                                                    }}
                                                    value={phoneNumber}
                                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                                />
                                            </Box>
                                        </React.Fragment>
                                    )}
                                    <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                                        <Button
                                            color="inherit"
                                            disabled={activeStep === 0}
                                            onClick={handleBack}
                                            sx={{ mr: 1 }}
                                        >
                                            {/* Back */}
                                        </Button>
                                        <Box sx={{ flex: "1 1 auto" }} />
                                        <Button onClick={handleNext}>
                                            {activeStep === steps.length - 1 ? "Finish" : "Continue"}
                                        </Button>
                                    </Box>
                                </React.Fragment>
                            )}
                        </Box>
                    </DialogContentText>
                </DialogContent>
            </Dialog>
            {/* ...existing code... */}
        </div>
    );
}
