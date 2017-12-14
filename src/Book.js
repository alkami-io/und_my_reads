import React, { Component } from 'react'
import ShelfChanger from './ShelfChanger'

class Book extends Component {
    state = {
        shelf: '',
    };

    handleChangeValue = (e) => (
        // Change State to Shelf Selected
        this.setState({shelf: e.target.value})

        // Update Book to hold assigned Shelf


    );

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
