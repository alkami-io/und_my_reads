import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import './App.css'
import './BookShelf'
import * as BooksAPI from './BooksAPI'
import Header from './Header'
import BookShelf from "./BookShelf"
import SearchBooks from "./SearchBooks"

class BooksApp extends Component {
    constructor() {
        super();
        this.state = {
            currentlyReadingList: [],
            wantToReadList: [],
            readList: [],
        }
    }

    // Set States for three book lists once the app mounts
    componentDidMount() {
       this.getAllBooks()
    }

    getAllBooks = () => {
        let self = this;
        BooksAPI.getAll().then(function(books) {
            self.setState({
                currentlyReadingList: books.filter((b) => b.shelf === 'currentlyReading'),
                wantToReadList: books.filter((b) => b.shelf === 'wantToRead'),
                readList: books.filter((b) => b.shelf === 'read')
            })
        })
    };

    // API Call for finding a book and updating it.
    findBook = (e, book_id) => {
        let selectedShelf = e.target.value;
        BooksAPI.get(book_id).then(book => {
            this.updateBook(book, selectedShelf)
        })
    };

    // API Call for updating a book's shelf. this is chained in find book to Find and update a book
    updateBook = (book, shelf) => {
        BooksAPI.update(book, shelf).then(book => {
            book.shelf = shelf
        });
    };

    // Reset States when Books are updated
    componentDidUpdate() {
        this.getAllBooks()
    }

    render() {

        return (
            <div className="app">
                <Route path='/search' render={() => (
                    <SearchBooks allBooks={[]}/>
                )}/>

                <Route path='/' exact render={() => (
                    <div className="list-books">
                        {/*Header Component*/}
                        <Header/>

                        {/*Book Shelf Components*/}
                        <div className="list-books-content">
                            <div>
                                {/*Currently Reading Bookshelf*/}
                                <BookShelf
                                    // shelfLabel Prop just used for labeling of BookShelf components
                                    shelfLabel={'Currently Reading'}
                                    // shelfName is used for filtering of Books withing the BookShelf Component
                                    shelfName={'currentlyReading'}
                                    // bookList is the list of books on a given shelf from the app state
                                    bookList={this.state.currentlyReadingList}
                                    updateBook={(e, book_id) => this.findBook(e, book_id)}
                                />

                                {/*Want to Read Book Shelf*/}
                                <BookShelf
                                    shelfLabel={'Want to Read'}
                                    shelfName={'wantToRead'}
                                    bookList={this.state.wantToReadList}
                                    updateBook={(e, book_id) => this.findBook(e, book_id)}

                                />

                                {/*Read Bookshelf*/}
                                <BookShelf
                                    shelfLabel={'Read'}
                                    shelfName={'read'}
                                    bookList={this.state.readList}
                                    updateBook={(e, book_id) => this.findBook(e, book_id)}
                                />

                            </div>
                        </div>


                        {/*Search Page Component*/}
                        <div className="open-search">
                            <Link
                                to='/search'
                                className='open-search'>Add a Book
                            </Link>
                        </div>
                    </div>
                )}/>
            </div>
        )
    }
}

export default BooksApp
