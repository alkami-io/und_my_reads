import React from 'react'

// Books Arrays for Initial Build Out Not needed once We are pulling data from the API
const BookShelf = (props) => (
    <div>
        <div className='bookshelf'>
            <h2 className='bookshelf-title'>{props.shelfName}</h2>
            <div className='bookshelf-books'>
                <ol className="books-grid">
                    {props.bookList.map(book =>
                        <li key={book.title}>
                            <div className="book">
                                <div className="book-top">
                                    <div className="book-cover"
                                         style={{
                                             width: 128,
                                             height: 193,
                                             backgroundImage: `url("${book.coverImage}")`
                                         }}>
                                    </div>
                                    <div className="book-shelf-changer">
                                        <select>
                                            <option value="none" disabled>Move to...</option>
                                            <option value="currentlyReading">Currently Reading</option>
                                            <option value="wantToRead">Want to Read</option>
                                            <option value="read">Read</option>
                                            <option value="none">None</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="book-title">{book.title}</div>
                                <div className="book-authors">{book.author}</div>
                            </div>
                        </li>
                    )}
                </ol>
            </div>
        </div>
    </div>
);

export default BookShelf

