import React from 'react'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
// import PropTypes from 'prop-types'
import './App.css'
import './BookShelf'
import Header from './Header'
import BookShelf from "./BookShelf"
import SearchBooks from "./SearchBooks"

class BooksApp extends React.Component {
    state = {
        allBooks: [],
        currentlyReadingBooks: [],
    };

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({ allBooks: books })
        })
    };

    render() {
        return (
            <div className="app">
                <Route path='/search' render={() => (
                    <SearchBooks allBooks={this.state.allBooks}/>
                )}/>

                <Route path='/' exact render={() => (
                    <div className="list-books">
                        {/*Header Component*/}
                        <Header/>

                        <div className="list-books-content">
                            <div>
                                <BookShelf
                                    shelfName={'Currently Reading'}
                                    shelf={'currentlyReading'}
                                />
                                <BookShelf
                                    shelfName={'Want to Read'}
                                    shelf={'wantToRead'}
                                />
                                <BookShelf
                                    shelfName={'Read'}
                                    shelf={'read'}
                                />

                            </div>
                        </div>


                        <div className="open-search">
                            <Link
                                to='/search'
                                className='open-search'>Add a Book</Link>
                        </div>
                    </div>
                )}/>
            </div>
        )
    }
}

export default BooksApp
