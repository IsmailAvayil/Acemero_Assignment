import React, { useContext } from "react";
import { AppContext } from "../AppContext/Appconext";

function Sorting() {
  const{handleAscendingByAuthorName,handleDescendingByAuthorName}=useContext(AppContext)
  return (
    <div>
      <h1>Sort By AuthorName</h1>
      <div>
        <button onClick={handleAscendingByAuthorName}>Ascending</button>
      </div><br></br>
      <div>
        <button  onClick={handleDescendingByAuthorName}>Descending</button>
      </div>
    </div>
  );
}

export default Sorting;
