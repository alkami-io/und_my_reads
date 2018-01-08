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
            allBooks: [],
            allBooksCount: 0,
            currentlyReadingList: [],
            currentlyReadingCount: 0,
            wantToReadList: [],
            wantToReadCount: 0,
            readList: [],
            readCount: 0
        }
    }

    componentDidMount() {
        this.getAllBooks();
        this.getCurrentlyReadingBooks();
        this.getWantToReadBooks();
    }

    // Get Allbooks from BooksAPI
    getAllBooks = () => {
        BooksAPI.getAll().then((books) => {
            this.setState({
                allBooks: books,
                allBooksCount: books.length
            })
        })
    };

    getCurrentlyReadingBooks = () => {
      BooksAPI.getAll().then((books) => {
          this.setState({
              currentlyReadingList: books.filter((b) => b.shelf === 'currentlyReading'),
              currentlyReadingCount: books.filter((b) => b.shelf === 'currentlyReading').length
          })
      })
    };

    getWantToReadBooks = () => {
        BooksAPI.getAll().then((books) => {
            this.setState({
                wantToReadList: books.filter((b) => b.shelf === 'wantToRead')
            })
        })
    };

    updateShelves = (e, book_id) => {
        this.setState = {
            currentlyReadingCount: this.state.currentlyReadingCount + 1
        }

    };

    findBook = (e, book_id) => {
        let selectedShelf = e.target.value;
        BooksAPI.get(book_id).then(book => {
            this.updateBook(book, selectedShelf)
        })
    }

    updateBook = (book, shelf) => {
        BooksAPI.update(book, shelf).then(book => {
            book.shelf = shelf
        });

        this.updateShelves()
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
                                    onShelfChange={(e, book_id) => this.findBook(e, book_id)}
                                />

                                {/*Want to Read Book Shelf*/}
                                <BookShelf
                                    shelfLabel={'Want to Read'}
                                    shelfName={'wantToRead'}
                                    bookList={this.state.wantToReadList}
                                    onShelfChange={(e, book_id) => this.findBook(e, book_id)}

                                />

                                {/*Read Bookshelf*/}
                                <BookShelf
                                    shelfLabel={'Read'}
                                    shelfName={'read'}
                                    bookList={this.state.readList}
                                    onShelfChange={(e, book_id) => this.findBook(e, book_id)}
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
