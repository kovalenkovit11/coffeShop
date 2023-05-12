import React,{useState} from 'react'
import './style.scss';
import { category } from "../../utils/filter";


const DropDown = ({ selected, setSelected }) => {
    const [isActive, setIsactive] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
  
    const selectItem = (option) => {
      setSelected(option.name);
      setSelectedOption(option.id);
      setIsactive(false);
    };
  return (
    <div className="catalog-filter">
        <div
          className="dropdown-btn category"
          onClick={() => setIsactive(!isActive)}
        >
          <p>Категорія: {selected}</p>
          <svg className={isActive ? 'active-svg' : 'svg' } width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.6667 6L8.02463 10.6421L3.38252 6" stroke="#828282" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
        </div>
        {isActive && (
          <div className="dropdown-content">
            {category.map((category) => (
              <div
                key={category.id}
                className="dropdown-item"
                onClick={() => selectItem(category)}
              >
                <span className={selectedOption === category.id ? 'active' : ''}></span>
                <p>{category.name}</p>
              </div>
            ))}
          </div>
        )}
      </div>
  )
}

export default DropDown