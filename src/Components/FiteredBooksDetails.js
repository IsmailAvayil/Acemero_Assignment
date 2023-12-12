import React,{useContext, useEffect} from 'react';
import { AppContext } from '../AppContext/Appconext';

function FiteredBooksDetails() {
  const {filterBooksData,setFilterBooksData} = useContext(AppContext);

  useEffect(()=>{
    setFilterBooksData(filterBooksData)
  },[])
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>BOOK NAME</th>
            <th>AUTHOR OF BOOK</th>
            <th>NUMBER OF COPIES OF BOOK PUBLISHED</th>
            <th>DATE OF PUBLISHED(YYYY-MM-DD)</th>
            <th>ADDED DATE</th>
          </tr>
        </thead>
        {filterBooksData.map((book, ind) => (
          <tbody key={ind}>
            <tr>
              <td>{book.Book_Name}</td>
              <td>{book.Author_of_Book}</td>
              <td>{book.No_of_copies_Published}</td>
              <td>{book.Published_date}</td>
              <td>{book.Added_Date}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  )
}

export default FiteredBooksDetails
