import './ForRentList.css'; 
import { PropertyTile } from './PropertyTile';
import { Spinner } from '../helpers/Spinner';
import { fetchForRentProperties } from '../utils/FetchForRentProperties';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { ForRentFilterComponent } from './ForRentFilterComponent';



 export const ForRentList: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filterValues, setFilterValues] = useState({});

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const {data, isPending, isError, error} = useQuery({
    queryKey: ['properties', currentPage, filterValues],
    queryFn: () => fetchForRentProperties(filterValues),
    staleTime: 3024000000,
    gcTime: 3024000000,
  },);

  let content;

  if(isPending) {
    content = <Spinner />
  }

  if (isError) {
    content = (
      <p>{ error?.message || "Failed to fetch events"}</p>
    );
  }

  if (data) {
    content = (
      <div className="property-grid">
        {data.map((property) => (
          <PropertyTile
            key={property.id}
            title={property.title}
            price={property.price}
            image={property.coverPhoto.url}
            rooms={property.rooms}
            baths={property.baths}
            area={property.area}
          />
        ))}
      </div>
    );
  }

  return (
    <div className = 'property-list'>
      <h1 className = 'property-list-title'>For Rent</h1>
      <ForRentFilterComponent setFilterValues={setFilterValues} />
      {content}
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

