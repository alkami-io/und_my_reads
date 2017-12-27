import React from 'react'
import Book from './Book'

const BookShelf = (props) => (
    <div>
        <div className='bookshelf'>
            {/*Get ShelfName from props when component is mounted*/}
            <h2 className='bookshelf-title'>{props.shelfName}</h2>
            <div className='bookshelf-books'>
                <ol className="books-grid">

                    {/*Get List of books from props iterate and list*/}
                    { props.bookList.map(book =>
                        <li key={book.title}>
                            <Book
                                book={book}
                                authors={book.authors}
                                image={book.imagesLinks}
                            />
                        </li>
                    )}
                </ol>
            </div>
        </div>
    </div>
);

export default BookShelf

