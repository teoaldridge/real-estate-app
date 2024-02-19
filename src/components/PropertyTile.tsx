import React from 'react';
import './PropertyTile.styles.css'

interface PropertyTileProps {
    title: string;
    price: number;
    image: string;
  }

const PropertyTile: React.FC<PropertyTileProps> = ({ title, price, image }) => {
  return (
    <div className="property-tile">
      <img src={image} alt={title} />
      <div className="property-details">
        <h2 className="property-title">{title}</h2>
        <p className="property-price">{price}</p>
      </div>
    </div>
  );
};

export default PropertyTile;