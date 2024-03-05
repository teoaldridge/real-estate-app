import React from 'react';
import './HomePage.css'

interface HomePageProps {
  onRentClick: () => void;
  onSaleClick: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onRentClick, onSaleClick }) => {
  return (
    <div className="home-page">
      <h1 className='brandName'>Home Vibe</h1>
      <div>
        
      </div>
      <h2 className="sub-heading">Find your dream property!</h2>
      <div className="buttons-container">
        <button onClick={onRentClick} className="rent-button">For Rent</button>
        <button onClick={onSaleClick} className="sale-button">For Sale</button>
      </div>
    </div>
  );
}

export default HomePage;