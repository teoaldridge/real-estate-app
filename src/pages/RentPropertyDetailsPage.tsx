import { useParams } from 'react-router-dom';

export const RentPropertyDetailsPage: React.FC = () => {
    const params = useParams();

    return(
        <>
             <h1>For Rent Property Detail Page</h1>
             <p> Property ID: {params.propertyId} </p>
        </>
    )
}