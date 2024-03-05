import React from 'react';
import './PropertyTile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faBath } from '@fortawesome/free-solid-svg-icons';

interface PropertyTileProps {
    title: string;
    price: number;
    image: string;
    rooms: number;
    baths: number;
    area: number;
  }

export const PropertyTile: React.FC<PropertyTileProps> = ({ title, price, image, rooms, baths, area }) => {
  const roundedArea = area.toFixed(1);
  
  return (
    <div className="property-tile">
      <img src={image} alt={title} />
      <div className="property-details">
        <h2 className="property-title">{title}</h2>
        <div className="property-info">
          <p className="property-price">{price}</p>
          <p className="divider"> | </p>
          <div className="property-icons">
            <FontAwesomeIcon icon={faBed} />
            <p> {rooms}</p>
            <p className="divider"> | </p>
            <FontAwesomeIcon icon={faBath} />
            <p>{baths}</p>
            <p className="divider"> | </p>
            <p className="area">{roundedArea} sqft</p>
          </div>
        </div>
      </div>
    </div>
  );
};