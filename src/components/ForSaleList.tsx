import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ForSaleList.styles.css'; 
import PropertyTile from './PropertyTile';



function PropertyList(): JSX.Element {
  interface Property {
      id: number;
      title: string;
      price: number;
      coverPhoto: {
          url: string;
      };
  }

  const [properties, setProperties] = useState<Property[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
      fetchProperties();
  }, [currentPage]);

  const fetchProperties = async (): Promise<void> => {
      try {
          const baseUrl = process.env.REACT_APP_BASE_URL;
          const apiKey = process.env.REACT_APP_API_KEY;
          const host = process.env.REACT_APP_HOST;
          
          if (!baseUrl || !apiKey || !host) {
              console.error('Environment variables not set.');
              return;
          }
  
          const response = await axios.get<any>(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=10&page=${currentPage}`, {
              headers: {
                  'X-RapidAPI-Key': apiKey,
                  'X-RapidAPI-Host': host
              }
          });
          
          setProperties(response.data.hits); // Set properties to the hits property of the response data
      } catch (error) {
          console.error('Error fetching properties:', error);
      }
      //console.log(properties);
      const coverPhotos = properties.map(property => property.coverPhoto.url);
      console.log(coverPhotos);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className = 'property-list'>
      <h1 className = 'property-list-title'>For Sale</h1>
      <div className="property-grid">
        {properties.map((property) => (
          <PropertyTile
            key={property.id}
            title={property.title}
            price={property.price}
            image={property.coverPhoto.url}
          />
        ))}
      </div>
      <div className="property-pagination">
        {Array.from({ length:6 }, (_, index) => (
          <button 
            key={index + 1} 
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? 'selected' : ''}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default PropertyList;