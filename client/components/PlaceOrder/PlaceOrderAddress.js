<<<<<<< Updated upstream
import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
=======
import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
>>>>>>> Stashed changes
import styles from "@/styles/PlaceOrderAddress.module.css";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import EastIcon from "@mui/icons-material/East";
import axios from "axios";

const PlaceOrderAddress = ({
  mobileNumber,
  handleClick,
  goToStep1,
  customerId,
}) => {
  const [pincode, setPincode] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState();
  const [address, setAddress] = useState();
  const [addressType, setAddressType] = useState();
  const [shippingMethod, setShippingMethod] = useState();

  const handleContinue = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:1992/customer/update/${customerId}`, {
        pincode: pincode,
        city: city,
        state: state,
        fullName: fullName,
        email: email,
        address: address,
        addressType: addressType,
        shippingMethod: shippingMethod,
      })
      .then((response) => {
        console.log("Customer update response: ", response.data);
      });
    handleClick();
  };

<<<<<<< Updated upstream
  return (
    <div>
      {/* <div className={styles.placeOrderAddress}> Edit Address</div> */}
      <div>
        <span className={styles.bgcolor}>
          {mobileNumber}{" "}
          <BorderColorIcon
            fontSize="16px"
            cursor="pointer"
            onClick={goToStep1}
          />
        </span>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1, overflowX: "auto", height: "150px" }}>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "42ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="Pincode"
              variant="outlined"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
            />
          </Box>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "20ch" },
              display: "flex",
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="City"
              variant="outlined"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="State"
              variant="outlined"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </Box>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "42ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="Full Name"
              variant="outlined"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </Box>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "42ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="Email Address"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Box>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "42ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="Full Address"
              variant="outlined"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </Box>
          <div className="placeOrderAddressMain">
            <div className={styles.placeOrderAddress}>Address Type</div>
            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                value={addressType}
                onChange={(e) => setAddressType(e.target.value)}
              >
                <FormControlLabel
                  value="home"
                  control={<Radio />}
                  label="Home"
                />
                <FormControlLabel
                  value="work"
                  control={<Radio />}
                  label="Work"
                />
              </RadioGroup>
            </FormControl>
          </div>
          <div className={styles.placeOrderAddress}>Shipping method</div>
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={shippingMethod}
              onChange={(e) => setShippingMethod(e.target.value)}
            >
              <FormControlLabel
                value="freeshipping"
                control={<Radio />}
                label="Free Shipping @ #10"
              />
            </RadioGroup>
          </FormControl>
        </div>
      </div>
      <div className={styles.PlaceOrderFooter}>
        <div className={styles.PlaceOrderButton} onClick={handleContinue}>
          Continue
          <span className={styles.space} />
          <EastIcon />
        </div>
      </div>
    </div>
  );
};
=======
    const [pincode, setPincode] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [fullName, setFullName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [fullAddress, setFullAddress] = useState("");

    return (
        <div>
            {/* <div className={styles.placeOrderAddress}> Edit Address</div> */}
            <div><span className={styles.bgcolor}>{mobileNumber} <BorderColorIcon fontSize="16px" cursor="pointer" onClick={goToStep1} /></span></div>
            <div style={{ display: 'flex' }}>
                <div style={{ flex: 1, overflowX: 'auto', height: '150px' }}>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '42ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            id="pincode"
                            label="Pincode"
                            variant="outlined"
                            value={pincode}
                            onChange={(e) => {
                                const value = e.target.value;
                                // Perform your validation logic here
                                if (value.match(/^\d{6}$/)) { // Example: Check for a 6-digit pincode
                                    setPincode(value); // Update the state if the value is valid
                                }
                            }}
                        />

                    </Box>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '20ch' },
                            display: "flex",
                        }}
                        noValidate
                        autoComplete="off"
>>>>>>> Stashed changes

export default PlaceOrderAddress;
