import React from 'react';
import './Spinner.styles.css'; // Import your Spinner styles

export const Spinner: React.FC = () => {
  return (
    <div className="spinner-container">
      <div className="spinner"></div>
    </div>
  );
};