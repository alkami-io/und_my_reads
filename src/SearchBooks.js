import React, { Component } from 'react'
import Book from './Book'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class SearchBooks extends Component {
    static propTypes = {
      allBooks: PropTypes.array.isRequired
    };

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
        }

        showingBooks.sort(sortBy('title'));

        return (
            <div>
                <div className="search-books">
                    <div className="search-books-bar">
                        <a className="close-search">Close</a>
                        <div className="search-books-input-wrapper">
                            <input
                                type="text"
                                placeholder="Search by title or author"
                                value={query}
                                onChange={(event) => this.updateQuery(event.target.value)}
                            />
                        </div>{/*End .search-books-input-wrapper*/}
                    </div>{/*End .search-books-bar*/}

                    <div className="search-books-results">
                        <ol className="books-grid">
                            { showingBooks.map(book =>
                                <li key={book.title}>
                                    <Book book={book} />
                                </li>
                            )}
                        </ol>{/*End .books-grid*/}
                    </div>{/*End .search-books-result*/}
                </div>{/*End .search-books*/}
            </div>
        )
    }
}

export default SearchBooks