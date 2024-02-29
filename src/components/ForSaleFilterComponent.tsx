import {filterData, getFilterValues} from '../utils/filterData'
import { useState } from 'react';
import './ForSaleFilterComponent.styles.css'

type QueryObject = {
    [key:string]:string
}

const ForSaleFilterComponent: React.FC<{ setFilterValues: Function }>  = ({
    setFilterValues
}) => {
    const filters = filterData;
    const [selectedFilters, setSelectedFilters] = useState<QueryObject>({});

    const handleFilterChange = (queryName: string, value: string) => {
        if(value===""){
            const selectedFilterCopy :QueryObject={};
            for (const key in selectedFilters) {
                if(key!==queryName){
                    selectedFilterCopy[key] = selectedFilters[key];
                }
            }
            setSelectedFilters(selectedFilterCopy);
        } else{
            setSelectedFilters({ ...selectedFilters, [queryName]: value });
        }
        
      };
    
      const handleApplyFilters = () => {
        //const filterValues = getFilterValues(filters);
        setFilterValues(selectedFilters);
      };

    return(
        <div className="for-sale-filter-container">
            <div className="filter-label">Filters:</div>
            {filters.map((filter) => (
                <div key={filter.queryName}>
                    <label htmlFor={filter.queryName}>{filter.placeholder}</label>
                    <select
                        name={filter.placeholder}
                        onChange={(e) => handleFilterChange(filter.queryName, e.target.value)}
                    >
                        <option value=""></option>
                        {filter?.items?.map((item) => (
                            <option value={item.value} key={item.value}>{item.name}</option>
                        ))}
                    </select>
                </div>
            ))}
             <button onClick={handleApplyFilters}>Apply Filters</button>
        </div>
    )
}

export default ForSaleFilterComponent;