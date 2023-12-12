import React, { useContext } from "react";
import { AppContext } from "../AppContext/Appconext";
import FilteredBookDetails from "./FiteredBooksDetails"

function FilterByPublishedYear() {
  const {
    filterYear,
    displayFilter,
    handlingFilterByYear,
    handlingChangeEnterYear,
  } = useContext(AppContext);
  return (
    <div >
      <h1>Filter By Only Year of "Published_Date"</h1>
      <div style={{display:"flex"}}>
        <input style={{marginRight:"10px"}}
          type="text"
          value={filterYear}
          onChange={handlingChangeEnterYear}
        />
        <div>
          <button type="button" onClick={handlingFilterByYear}>
            Filter By Published_Year of the Date
          </button>
        </div>
      </div>
      {displayFilter? <FilteredBookDetails/> :null}
     
    </div>
  );
}

export default FilterByPublishedYear;
