import React from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

function BookSearch(props) {
  return (
    <div className="search-books">
      <SearchBar onSearch={props.onSearch} onResetSearch={props.onResetSearch}/>
      <SearchResults myBooks={props.myBooks} searchBooks={props.searchBooks} onMove={props.onMove} />
    </div>
  );
}

export default BookSearch;
