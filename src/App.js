import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { debounce } from "throttle-debounce";
import * as BooksAPI from "./BooksAPI";
import BookList from "./components/BookList";
import BookSearch from "./components/BookSearch";
import "./App.css";
import { bookshelves } from "./tempData";

export default function App() {
  const [myBooks, setUpdateBooks] = useState([]);
  const [searchBooks, setSearchBooks] = useState([]);

  const queryBooks = debounce(300, false, (query) => {
    if (query.length > 0) {
      BooksAPI.search(query).then((books) => {
        if (books.error) {
          setSearchBooks([]);
        } else {
          setSearchBooks(books);
        }
      });
    } else {
      setSearchBooks([]);
    }
  });

  const resetSearch = () => {
    setSearchBooks([]);
  };

  const moveBook = (book, shelf) => {
    BooksAPI.update(book, shelf);

    let movedBooks = [];
    movedBooks = myBooks.filter((b) => b.id !== book.id);

    if (shelf !== 'none') {
      book.shelf = shelf
      movedBooks = movedBooks.concat(book)
    }
    setUpdateBooks(movedBooks);
  };
  useEffect(() => {
    let mounted = true;
    BooksAPI.getAll().then((books) => {
      if (mounted) {
        setUpdateBooks(books);
      }
    });
    return () => (mounted = false);
  }, []);
  return (
    <div className="app">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <BookList
              bookshelves={bookshelves}
              books={myBooks}
              onMove={moveBook}
            />
          }
        />
        <Route
          path="/search"
          element={
            <BookSearch
              searchBooks={searchBooks}
              myBooks={myBooks}
              onMove={moveBook}
              onSearch={queryBooks}
              onResetSearch={resetSearch}
            />
          }
        />
      </Routes>
    </div>
  );
}
