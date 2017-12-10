import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class SearchBooks extends Component {
    state = {
        query: ''
    };

    updateQuery = (query) => (
        this.setState({query: query.trim() })
    );

    render() {
        const { allBooks } = this.props;
        const { query } = this.state;

        let showingBooks;

        if(query) {
            const match = new RegExp(escapeRegExp(query), 'i');
            showingBooks = this.props.allBooks.filter((book) => match.test(book.title));
        } else {
            showingBooks = allBooks
        };

        // showingBooks = allBooks;

        showingBooks.sort(sortBy('title'));

        return (
            <div>
                <div className="search-books">
                    <div className="search-books-bar">
                        <a className="close-search">Close</a>
                        <div className="search-books-input-wrapper">
                            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                            <input
                                type="text"
                                placeholder="Search by title or author"
                                value={query}
                                onChange={(event) => this.updateQuery(event.target.value)}
                            />

                        </div>
                    </div>
                    <div className="search-books-results">
                        <ol className="books-grid">
                            { showingBooks.map(book =>
                                <li key={book.title}>
                                    <Book book={book} />
                                </li>
                            )}
                        </ol>
                    </div>
                </div>
            </div>
        )
    }
}


export default SearchBooks