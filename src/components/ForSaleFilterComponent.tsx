import { forSaleFilterData } from '../utils/forSaleFilterData'
import { useState } from 'react';
import './ForSaleFilterComponent.styles.css'

type QueryObject = {
    [key:string]:string
}

const ForSaleFilterComponent: React.FC<{ setFilterValues: Function }>  = ({
    setFilterValues
}) => {
    const filters = forSaleFilterData;
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
        setFilterValues(selectedFilters);
      };

    return(
        <div className="for-sale-filter-container">
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