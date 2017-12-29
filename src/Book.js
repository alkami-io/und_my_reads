import React, { Component } from 'react'
import ShelfChanger from './ShelfChanger'
import * as BooksAPI from './BooksAPI'

class Book extends Component {
    constructor(props) {
        super ();
        this.state.shelf = props.book.shelf;
        // this.setShelf = this.setShelf.bind(this);
        this.findBook = this.findBook.bind(this);
        this.updateBook = this.updateBook.bind(this);
        this.handleChangeValue = this.handleChangeValue.bind(this);
    }

    state = {
        shelf: ''
    };

    // Not currently using this once I passed the event into the findBook function.  Hold in case need it during refactor
    // setShelf = (shelf) => {
    //     // Change State to Shelf Selected
    //     this.setState({shelf: shelf});
    // };

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
            console.log('State: ' + this.state.shelf);

            // Update Book after it is found: Probably not the best place for this
            console.log(selectedShelf)
            this.updateBook(book, selectedShelf)
        })
        this.setState({shelf: selectedShelf})
    };

    handleChangeValue = (e) => {
        this.findBook(e);
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
                            shelf={this.state.shelf}
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
