import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { RouterProvider, createBrowserRouter} from 'react-router-dom';
import { HomePage } from './pages/HomePage'
import { ForSaleListPage } from './pages/ForSaleListPage';
import { ForRentListPage } from './pages/ForRentListPage';
import { SalePropertyDetailsPage } from './pages/SalePropertyDetailsPage';
import { RentPropertyDetailsPage } from './pages/RentPropertyDetailsPage';
import { RootLayout } from './pages/RootLayout';


const router = createBrowserRouter([
    { path: '/', element: <RootLayout/>, 
    children: [
      { index: true, element: <HomePage/>},
      { path: 'forsale/', element: <ForSaleListPage/>},
      { path: 'forrent/', element: <ForRentListPage/>},   
      { path: 'forsale/:propertyId', element: <SalePropertyDetailsPage/>},
      { path: 'forrent/:propertyId', element: <RentPropertyDetailsPage/>},
    ]},
  ]
);

const App: React.FC = () => {
  return(
    <QueryClientProvider client={new QueryClient}>
      <RouterProvider router={router}/>
    </QueryClientProvider>
  ); 
   
}

export default App;
