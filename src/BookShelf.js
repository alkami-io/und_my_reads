import React, { Component } from 'react'
import Book from './Book'

class BookShelf extends Component {
    handleShelfChange = (e, book_id) => {
        this.props.updateBook(e, book_id);
    };

    render() {
        return (
            <div>
                <div className='bookshelf'>
                    {/*Get ShelfName from props when component is mounted*/}
                    <h2 className='bookshelf-title'>{this.props.shelfLabel}</h2>
                    <div className='bookshelf-books'>
                        <ol className="books-grid">

                            {/*Get List of books from props iterate and list*/}
                            { this.props.bookList.map(book =>
                                <li key={book.title}>
                                    <Book
                                        book={book}
                                        authors={book.authors}
                                        image={book.imagesLinks}
                                        shelf={book.shelf}
                                        changeShelf={(e, book_id) => this.handleShelfChange(e, book_id)}
                                    />
                                </li>
                            )}
                        </ol>
                    </div>
                </div>
            </div>
        )
    }
}

export default BookShelf

