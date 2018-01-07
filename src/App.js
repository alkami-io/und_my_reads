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
        allBooks: []
    };

    // Get Allbooks from BooksAPI
    getAllBooks = () => {
        console.log('Getting all books.')
      BooksAPI.getAll().then((books) => {
        this.setState({
            allBooks: books
        })
      })
    };

    componentDidMount() {
        this.getAllBooks();
    }

    updateShelves = (e) => {
        BooksAPI.getAll().then((books) => {
            let updatedBooks = books
            this.setState({allBooks: updatedBooks})
        });
        // this.setState({allBooks: updatedBooks})

    };

    render() {
        let currentlyReadingList = this.state.allBooks.filter((b) => b.shelf === 'currentlyReading');
        let wantToReadList = this.state.allBooks.filter((b) => b.shelf === 'wantToRead');
        let readList = this.state.allBooks.filter((b) => b.shelf === 'read');

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
                                    bookList={currentlyReadingList}
                                    onShelfChange={(e) => this.updateShelves(e)}
                                />

                                {/*Want to Read Book Shelf*/}
                                <BookShelf
                                    shelfLabel={'Want to Read'}
                                    shelfName={'wantToRead'}
                                    bookList={wantToReadList}
                                    onShelfChange={(e) => this.updateShelves(e)}

                                />

                                {/*Read Bookshelf*/}
                                <BookShelf
                                    shelfLabel={'Read'}
                                    shelfName={'read'}
                                    bookList={readList}
                                    onShelfChange={(e) => this.updateShelves(e)}
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
