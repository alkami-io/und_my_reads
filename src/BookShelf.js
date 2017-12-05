import React from 'react'
import ShelfChanger from './ShelfChanger'

const BookShelf = (props) => (
    <div>
        <div className='bookshelf'>
            {/*Get ShelfName from props when component is mounted*/}
            <h2 className='bookshelf-title'>{props.shelfName}</h2>
            <div className='bookshelf-books'>
                <ol className="books-grid">

                    {/*Get List of books from props iterate and list*/}
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

                                    {/*Shelf Changer Component for each book*/}
                                    <ShelfChanger/>
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

