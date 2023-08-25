import React from 'react';
import Modal from 'react-modal';

const LoginPopup = ({ isOpen, onRequestClose }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Login Popup"
        >
            {/* Add your login form or content here */}
            <h2>Login</h2>
            {/* ... login form elements ... */}
            <button onClick={onRequestClose}>Close</button>
        </Modal>
    );
};

export default LoginPopup;
