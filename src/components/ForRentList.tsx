import './ForRentList.styles.css'; 
import PropertyTile from './PropertyTile';
import Spinner from '../helpers/Spinner';
import { fetchProperties } from '../utils/FetchProperties';
import { useQuery } from '@tanstack/react-query';



function PropertyList(): JSX.Element {
  const {data, isPending, isError, error} = useQuery({
    queryKey: ['properties'],
    queryFn: () => fetchProperties(),
    staleTime: 3024000000,
  });

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
      {content}
    </div>
  );
}

export default PropertyList;