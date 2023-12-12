import React, { createContext, useEffect, useState } from "react";
export const AppContext = createContext();

function AppContextProvider(props) {
  const [booksData, setBooksData] = useState([]);
  var d = new Date();
  var todayDate = d.toLocaleDateString('en-GB');
  const[displayFilter,setDisplayFilter]=useState(false)
  const [userData, setUserData] = useState({
    Book_Name: "",
    Author_of_Book: "",
    No_of_copies_Published: "",
    Published_date:"2023-12-01",
    Added_Date:todayDate,
  });

  const[filterBooksData,setFilterBooksData]=useState([])
  const [filterYear,setFilterYear]=useState(""); 
  

  useEffect(()=>{
    setBooksData([
      {
        Book_Name: "book1",
        Author_of_Book: "rajeev",
        No_of_copies_Published: 3,
        Published_date: "2018-02-12",
        Added_Date: "22/04/2023",
      },
      {
        Book_Name: "book2",
        Author_of_Book: "basith",
        No_of_copies_Published: 6,
        Published_date: "2019-22-28",
        Added_Date: "02/04/2020",
      },
      {
        Book_Name: "book8",
        Author_of_Book: "Abu",
        No_of_copies_Published: 8,
        Published_date: "2021-02-07",
        Added_Date: "01/04/2020",
      },
      {
        Book_Name: "book7",
        Author_of_Book: "christie",
        No_of_copies_Published: 5,
        Published_date: "2021-02-04",
        Added_Date: "01/04/2020",
      }
    ]);
  },[])

  

  



  const handleBookName = (event) => {
    setUserData({ ...userData, Book_Name: event.target.value });
  };

  const handleAuthorName = (event) => {
    setUserData({ ...userData, Author_of_Book: event.target.value });
  };

  const handleCountCopies = (event) => {
    setUserData({ ...userData, No_of_copies_Published: event.target.value });
  };

  
  const handlePublishedDate=(event)=>{
    setUserData({...userData,Published_date:event.target.value})
  


  }

  const handlingChangeEnterYear=(event)=>{
    setFilterYear(event.target.value)
  }  

  const handlingFilterByYear=()=>{
    setDisplayFilter(true)
    const filteredYear=booksData.filter((obj)=>obj.Published_date.slice(0,4)==filterYear)
    setFilterBooksData(filteredYear) 
  }


  const handleSubmit=(event)=>{

    event.preventDefault();
    setUserData({...userData,Added_Date:todayDate})
    if(userData.Book_Name && userData.Author_of_Book && userData.No_of_copies_Published && userData.Published_date && userData.Added_Date ){      
      setBooksData([...booksData,userData])
      console.log(userData)
    }
    else{
      alert("No!")
    }
  }

  const handleAscendingByAuthorName=()=>{

    const ascendingOrder=(a,b)=>{
      const authorUpperCase_A = a.Author_of_Book.toUpperCase()
      const authorUpperCase_B = b.Author_of_Book.toUpperCase()
      if (authorUpperCase_A < authorUpperCase_B ){
        return -1;
      }
      if ( authorUpperCase_A >authorUpperCase_B  ){
        return 1;
      }
      return 0;
    }
    booksData.sort(ascendingOrder)
    setBooksData([...booksData]) 
  }
  const handleDescendingByAuthorName=()=>{
    
    const descendingOrder=(a,b)=>{
      const authorUpperCase_A = a.Author_of_Book.toUpperCase()
      const authorUpperCase_B = b.Author_of_Book.toUpperCase()
      if (authorUpperCase_A  > authorUpperCase_B ){
        return -1;
      }
      if ( authorUpperCase_A < authorUpperCase_B){
        return 1;
      }
      return 0;
    }
    booksData.sort(descendingOrder)
    setBooksData([...booksData]) 
  }

  const value = {
    booksData,
    userData,
    todayDate,
    filterYear,
    filterBooksData,
    displayFilter,
    setFilterBooksData,
    handleBookName,
    handleAuthorName,
    handleCountCopies,
    handleSubmit,
    handleAscendingByAuthorName,
    handleDescendingByAuthorName,
    handlePublishedDate,
    handlingFilterByYear,
    handlingChangeEnterYear
    
  };
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
}

export default AppContextProvider;
 