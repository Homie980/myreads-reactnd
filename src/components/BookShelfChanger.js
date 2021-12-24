import React, { useState } from "react";

function BookShelfChanger(props) {
  const [value, setValue] = useState(props.shelf)
  const handleChange = (e) => {
    setValue(e.target.value)
    props.onMove(props.book, e.target.value)
  }
  return (
    <div className="book-shelf-changer">
      <select value={value} onChange={handleChange}>
        <option value="move" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
}

export default BookShelfChanger;
