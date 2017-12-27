import React, { Component } from 'react'
import ShelfChanger from './ShelfChanger'
import * as BooksAPI from './BooksAPI'

class Book extends Component {
    constructor(props){
        super ();
        this.state.shelf = props.book.shelf;
        this.setShelf = this.setShelf.bind(this);
        this.findBook = this.findBook.bind(this);
        this.updateBook = this.updateBook.bind(this);
        this.handleChangeValue = this.handleChangeValue.bind(this);
    }

    state = {
    };

    setShelf = (e) => {
        // Change State to Shelf Selected
        this.setState({shelf: e.target.value});
        // this.updateBook(this.props.book, e.target.value);
    };

    updateBook = (book, shelf) => (
        BooksAPI.update(book, shelf).then(book => {
                book.shelf = shelf;
            }
        )
    );

    findBook = () => (
        BooksAPI.get(this.props.book.id).then(book => {
            console.log('Book Found!')
            console.log('Book ID:' + book.id)
            console.log('Book Details:' + book.id)
            console.log('State: ' + this.state.shelf)
            this.updateBook(book, this.state.shelf)
        })
    );

    handleChangeValue = (e) => {
        this.setShelf(e);
        this.findBook();
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
                            // shelf={this.state.shelf}
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
