import React from 'react';
import './App.css';
import PropertyList from './components/PropertyList';


const App: React.FC = () => {
  return (
  <div>
    <h1>Real Estate</h1>
    <PropertyList />
  </div>
  );
}


// export async function getStaticProps() {
//   //const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`);
//   const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`);

//   return {
//     props: {
//      // propertiesForSale: propertyForSale?.hits,
//       propertiesForRent: propertyForRent?.hits,
//     },
//   };
// }

export default App;
