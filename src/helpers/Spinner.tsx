import React from 'react';
import './Spinner.styles.css'; // Import your Spinner styles

const Spinner: React.FC = () => {
  console.log("I spin!")
  return (
    <div className="spinner-container">
      <div className="spinner"></div>
      <h1>I spin</h1>
    </div>
  );
};

export default Spinner;