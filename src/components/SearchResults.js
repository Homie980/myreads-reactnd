import React from "react";
import Book from "./Book";

function SearchResults(props) {
  const movedBooks = props.searchBooks.map((book) => {
    props.myBooks.map((b) => {
      if (b.id === book.id) {
        book.shelf = b.shelf;
      }
      return b;
    });
    return book;
  });
  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {movedBooks.map((book) => (
          <Book
            key={book.id}
            book={book}
            shelf={book.shelf ? book.shelf : "none"}
            onMove={props.onMove}
          />
        ))}
      </ol>
    </div>
  );
}

export default SearchResults;
