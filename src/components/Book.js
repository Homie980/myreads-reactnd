import React from "react";
import BookShelfChanger from "./BookShelfChanger";

function Book(props) {
  return (
    <>
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage:
                  `url(${props.book.imageLinks && props.book.imageLinks.thumbnail})`,
              }}
            ></div>
            <BookShelfChanger book={props.book} shelf={props.shelf} onMove={props.onMove}/>
          </div>
          <div className="book-title">{props.book.title}</div>
          <div className="book-authors">{props.book.authors && props.book.authors.join(", ")}</div>
        </div>
      </li>
    </>
  );
}

export default Book;
