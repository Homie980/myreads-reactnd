import React from 'react'
import Book from './Book'

function BookShelf(props) {
  const { shelf } = props
  const filteredBooks = props.books.filter(book => book.shelf === shelf.key)
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.shelf.name}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {filteredBooks.map(book => (<Book book={book} key={book.id} shelf={shelf.key} onMove={props.onMove}/>))}
              </ol>
            </div>
          </div>
    )
}

export default BookShelf
