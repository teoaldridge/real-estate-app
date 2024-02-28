import axios from "axios";

interface Property {
    id: number;
    title: string;
    price: number;
    coverPhoto: {
        url: string;
    };
    rooms: number;
    baths: number; 
    area: number;
}

interface Filters {
    rentFrequency: string;
    minPrice: string;
    maxPrice: string;
    sort: string;
    minArea: number;
    maxArea: number;
    rooms: number;
    baths: number;
    furnishType: string;
    propertyType: string;
  }

export const fetchForRentProperties = async (filters?: Filters):Promise<Property[]> => {
    
      try {
          const baseUrl = process.env.REACT_APP_BASE_URL;
          const apiKey = process.env.REACT_APP_API_KEY;
          const host = process.env.REACT_APP_HOST;
          
          if (!baseUrl || !apiKey || !host) {
              console.error('Environment variables not set.');
              return [];
          }

          let apiUrl = `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=10`;

          if (filters) {
            Object.entries(filters).forEach(([key, value]) => {
                if (value) {
                  apiUrl += `&${key}=${value}`;
                }
              });
          }

          const response = await axios.get<any>(apiUrl, {
              headers: {
                  'X-RapidAPI-Key': apiKey,
                  'X-RapidAPI-Host': host
              }
          });
          
          const properties:Property[]  = response.data.hits;
          
          console.log(properties);
          return properties; 
      } catch (error) {
          console.error('Error fetching properties:', error);
          return[];
      }

  };