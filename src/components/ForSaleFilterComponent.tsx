import {filterData, getFilterValues} from '../utils/filterData'
import { useState } from 'react';
import './ForSaleFilterComponent.styles.css'

const ForSaleFilterComponent: React.FC = () => {
    const [filters, setFilters] = useState(filterData);

    const searchProperties = (filterValues:any) => {
        
    }

    const logFilters = () => {
        filters.map((filter) => (
            console.log(filter.queryName)
        ))
    }

    logFilters()

    return(
        <div className="for-sale-filter-container">
            <div className="filter-label">Filters:</div>
            {filters.map((filter) => (
                <div key={filter.queryName}>
                    <label htmlFor={filter.queryName}>{filter.placeholder}</label>
                    <select
                        name={filter.placeholder}
                        onChange={(e) => searchProperties({[filter.queryName]: e.target.value})}
                    >
                        {filter?.items?.map((item) => (
                            <option value={item.value} key={item.value}>{item.name}</option>
                        ))}
                    </select>
                </div>
            ))}
        </div>
    )
}

export default ForSaleFilterComponent;