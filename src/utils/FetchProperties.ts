import axios from "axios";

export const fetchProperties = async () => {
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

      try {
          const baseUrl = process.env.REACT_APP_BASE_URL;
          const apiKey = process.env.REACT_APP_API_KEY;
          const host = process.env.REACT_APP_HOST;
          
          if (!baseUrl || !apiKey || !host) {
              console.error('Environment variables not set.');
              return;
          }
  
          const response = await axios.get<any>(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=10`, {
              headers: {
                  'X-RapidAPI-Key': apiKey,
                  'X-RapidAPI-Host': host
              }
          });
          
          const properties:Property[]  = response.data.hits;
          
          return properties; 
      } catch (error) {
          console.error('Error fetching properties:', error);
      }

  };