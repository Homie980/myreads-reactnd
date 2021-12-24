import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function SearchBar(props) {
  const [value, setValue] = useState("");
  const [valEffect ,setValEffect] = useState("")
  const handleChange = (e) => {
    const val = e.target.value
    setValue(val);
    setValEffect(val)
    console.log(val);
  };
  useEffect(() => {
    props.onSearch(valEffect)
  }, [value, valEffect]);
  return (
    <div className="search-books-bar">
      <Link to="/">
        <button className="close-search" onClick={props.onResetSearch}>
          Close
        </button>
      </Link>
      <div className="search-books-input-wrapper">
        <input
          type="text"
          placeholder="Search by title or author"
          autoFocus
          value={value}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
// import React, { Component } from "react";
// import { Link } from 'react-router-dom'

// class SearchBar extends Component {
//   state = {
//     value: "",
//   };
//   handleChange = (event) => {
//     const val = event.target.value;
//     this.setState({ value: val }, () => {
//       this.props.onSearch(val);
//     });
//   };
//   render() {
//     return (
//       <div className="search-books-bar">
//         <Link to="/">
//           <button className="close-search" onClick={this.props.onResetSearch}>
//             Close
//           </button>
//         </Link>
//         <div className="search-books-input-wrapper">
//           <input
//             type="text"
//             placeholder="Search by title or author"
//             autoFocus
//             value={this.value}
//             onChange={this.handleChange}
//           />
//         </div>
//       </div>
//     );
//   }
// }

export default SearchBar;
