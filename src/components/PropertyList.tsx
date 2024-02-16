import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PropertyList.styles.css'; 



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

    useEffect(() => {
        fetchProperties();
    }, []);

    const fetchProperties = async (): Promise<void> => {
        try {
            const baseUrl = process.env.REACT_APP_BASE_URL;
            const apiKey = process.env.REACT_APP_API_KEY;
            const host = process.env.REACT_APP_HOST;
            
            if (!baseUrl || !apiKey || !host) {
                console.error('Environment variables not set.');
                return;
            }
    
            const response = await axios.get<any>(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`, {
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

  return (
    <div>
      <h1>Property List</h1>
      <ul>
        {properties.map((property) => (
          <li key={property.id}>
            <h2>{property.title}</h2>
            <p>Price: {property.price}</p>
            <img className='photo' src={property.coverPhoto.url}></img>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PropertyList;