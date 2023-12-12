import React, { useContext } from "react";
import { AppContext } from "../AppContext/Appconext";

function RegisterForm() {
  const {userData,handleBookName,handleAuthorName,handleCountCopies,handleSubmit,handlePublishedDate,todayDate}=useContext(AppContext)
  return (
    <div>
      <h1>RegisterForm</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Book_Name:</label>
          <input type="text" value={userData.bookName} onChange={handleBookName} />{userData.bookName}
        </div>
        <div>
          <label>Author of Book:</label>
          <input type="text" value={userData.authorName} onChange={handleAuthorName} />{userData.authorName}
        </div>
        <div>
          <label>No of copies Published</label>
          <input type="text" value={userData.countOfCopies} onChange={handleCountCopies} />{userData.countOfCopies}
        </div>
        <div>
          <label>Published date:</label>
          <input type="date"  value={userData.Published_date} onChange={handlePublishedDate} />
        </div>
        <div>
          <label>Added date:</label>
          <input type="text"  value={todayDate}/>
        </div>
        <div>
          <button type="submit">submit</button>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
