import React from 'react';

const PlaceOrderAddress1 = ({
    pincode,
    city,
    state,
    fullName,
    emailAddress,
    fullAddress
}) => {
    return (
        <div>
            <div>Pincode: {pincode}</div>
            <div>City: {city}</div>
            <div>State: {state}</div>
            <div>Full Name: {fullName}</div>
            <div>Email Address: {emailAddress}</div>
            <div>Full Address: {fullAddress}</div>
        </div>
    );
};

export default PlaceOrderAddress1;
