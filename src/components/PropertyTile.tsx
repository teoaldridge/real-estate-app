import React from 'react';
import './PropertyTile.styles.css'

interface PropertyTileProps {
    title: string;
    price: number;
    image: string;
    rooms: number;
    baths: number;
  }

const PropertyTile: React.FC<PropertyTileProps> = ({ title, price, image, rooms, baths }) => {
  return (
    <div className="property-tile">
      <img src={image} alt={title} />
      <div className="property-details">
        <h2 className="property-title">{title}</h2>
        <p className="property-price">{price}</p>
        <p>{rooms}</p>
        <p>{baths}</p>
      </div>
    </div>
  );
};

export default PropertyTile;