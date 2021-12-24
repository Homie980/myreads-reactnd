import React from "react";
import BookShelfContainer from "./BookShelfContainer";
import AddBook from "./AddBook";

function BookList(props) {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <BookShelfContainer bookshelves={props.bookshelves} books={props.books} onMove={props.onMove}/>
      <AddBook />
    </div>
  );
}

export default BookList;
