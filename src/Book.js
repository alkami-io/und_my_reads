import React, { Component } from 'react'
import ShelfChanger from './ShelfChanger'

class Book extends Component {
    handleChangeValue = (e) => {
        let book_id = this.props.book.id
        this.props.changeShelf(e, book_id);
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
                            shelf={this.props.shelf}
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
