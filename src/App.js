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
    state = {
        currentlyReadingList: [],
        wantToReadList: [],
        readList: []
    };

    // Get CurrentlyReadingList from BooksAPI
    getCurrentlyReadingList = () => {
        BooksAPI.getAll().then((books) => {
            this.setState({currentlyReadingList: books.filter((b) => b.shelf === 'currentlyReading')})
        })
    };

    // Get WantToReadList from BooksAPI
    getWantToReadList = () => {
      BooksAPI.getAll().then((books) => {
          this.setState({wantToReadList: books.filter((b) => b.shelf === 'wantToRead')})
      })
    };

    // Get ReadList from BooksAPI
    getReadList = () => {
        BooksAPI.getAll().then((books) => {
            this.setState({readList: books.filter((b) => b.shelf === 'read')})
        })
    };

    componentDidMount() {
        this.getCurrentlyReadingList();
        this.getWantToReadList();
        this.getReadList();
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
                                />

                                {/*Want to Read Book Shelf*/}
                                <BookShelf
                                    shelfLabel={'Want to Read'}
                                    shelfName={'wantToRead'}
                                    bookList={this.state.wantToReadList}
                                />

                                {/*Read Bookshelf*/}
                                <BookShelf
                                    shelfLabel={'Read'}
                                    shelfName={'read'}
                                    bookList={this.state.readList}
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
