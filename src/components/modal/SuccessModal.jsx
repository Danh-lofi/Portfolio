import React, { useState } from 'react';
import './success-modal.scss'; // Import your CSS file for styling

const SuccessModal = ({ isOpen, closeModal }) => {
  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <h2>Success</h2>
        <p>Thank you</p>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default SuccessModal;
