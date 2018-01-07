import React, { Component } from 'react'
import ShelfChanger from './ShelfChanger'
import * as BooksAPI from './BooksAPI'

class Book extends Component {
    // Update Book Call to API
    updateBook = (book, shelf) => {
        BooksAPI.update(book, shelf).then(book => {
                book.shelf = shelf;
            }
        );
    };

    // Find Book Call to API
    // TODO Refactor this?? Previously had separate function for just setting shelf but elected to pass event into this function, hold as variable and then Find book and call Update (separate function)  Not horrible but could refactor.
    findBook = (e) => {
        let selectedShelf = e.target.value
        BooksAPI.get(this.props.book.id).then(book => {
            // TODO Remove Console Logs once debugging complete
            console.log('Book Found!');
            console.log('Book ID:' + book.id);
            console.log('Book Details:' + book.id);
            console.log('State: ' + this.props.shelf);

            // Update Book after it is found: Probably not the best place for this
            console.log(selectedShelf);
            this.updateBook(book, selectedShelf)
        })
    };

    handleChangeValue = (e) => {
        this.findBook(e);
        this.props.changeShelf(e);
    };

    render() {
        return (
            <div>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover"
                             style={{
                                 width: 128,
                                 height: 193,
                                 backgroundImage: `url("${this.props.book.imageLinks.thumbnail}")`
                             }}>
                        </div>

                        {/*Shelf Changer Component for each book*/}
                        <ShelfChanger
                            shelf={this.props.shelf}
                            onChangeValue={this.handleChangeValue}
                        />
                    </div>
                    <div className="book-title">{this.props.book.title}</div>
                    <div className="book-authors">{this.props.book.authors[0]}</div>
                </div>
            </div>
        )
    }
}

export default Book
