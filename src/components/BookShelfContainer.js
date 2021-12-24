import React from "react";
import BookShelf from "./BookShelf";

function BookShelfContainer(props) {
  return (
    <div className="list-books-content">
      <div>
        {props.bookshelves.map((shelf) => (
          <BookShelf key={shelf.key} shelf={shelf} books={props.books} onMove={props.onMove}/>
        ))}
      </div>
    </div>
  );
}

export default BookShelfContainer;

