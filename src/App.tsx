import React, { useState } from 'react';
import './App.css';
import ForRentList from './components/ForRentList';
import ForSaleList from './components/ForSaleList';
import HomePage from './components/HomePage';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
//<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Exo+2:wght@400;700&display=swap"></link>

const queryClient = new QueryClient();

const App: React.FC = () => {
  const [showRentalList, setShowRentalList] = useState(false);
  const [showSaleList, setShowSaleList] = useState(false);

  const handleRentClick = () => {
    setShowRentalList(true);
    setShowSaleList(false);
  };

  const handleSaleClick = () => {
    setShowSaleList(true);
    setShowRentalList(false);
  };

  return (
    <QueryClientProvider client={new QueryClient}>
      <div className="app">
        <HomePage onRentClick={handleRentClick} onSaleClick={handleSaleClick} />
              {showRentalList && <ForRentList />}
              {showSaleList && <ForSaleList />}
      </div>
    </QueryClientProvider>
  );
}

export default App;
