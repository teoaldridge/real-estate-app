import React, { useState } from 'react';
import './ForRentFilterComponent.styles.css'

interface Filters {
  rentFrequency: string;
  minPrice: number;
  maxPrice: number;
  sort: string;
  minArea: number;
  maxArea: number;
  rooms: number;
  baths: number;
  furnishType: string;
  propertyType: string;
}

interface FilterProps {
  applyFilters: (filters: Filters) => void;
}

const FilterComponent: React.FC<FilterProps> = ({ applyFilters }) => {
  const [filters, setFilters] = useState<Filters>({
    rentFrequency: '',
    minPrice: 0,
    maxPrice: 0,
    sort: '',
    minArea: 0,
    maxArea: 0,
    rooms: 0,
    baths: 0,
    furnishType: '',
    propertyType: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value
    }));
    console.log(filters); 
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    applyFilters(filters);
  };

  return (
    <div className="filter-container">
      <form onSubmit={handleSubmit}>
        <label>
          Rent Frequency:
          <select name="rentFrequency" value={filters.rentFrequency} onChange={handleChange}>
            <option value="">Select</option>
            <option value="monthly">Monthly</option>
            <option value="weekly">Weekly</option>
          </select>
        </label>

        <label>
          Min Price:
          <input type="text" name="minPrice" value={filters.minPrice} onChange={handleChange} />
        </label>

        <label>
          Max Price:
          <input type="text" name="maxPrice" value={filters.maxPrice} onChange={handleChange} />
        </label>

        {/* Add other filters similarly */}

        <button type="submit">Apply Filters</button>
      </form>
    </div>
  );
};

export default FilterComponent;
