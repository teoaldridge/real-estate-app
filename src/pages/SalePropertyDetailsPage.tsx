import { useParams } from 'react-router-dom';

export const SalePropertyDetailsPage: React.FC = () => {
    const params = useParams();
    
    return(
        <>
            <h1>For Sale Property Detail Page</h1>
            <p> Property ID: {params.propertyId} </p>
        </>  
    )
}