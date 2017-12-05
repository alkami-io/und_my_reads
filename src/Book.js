import React, { Component } from 'react'
import ShelfChanger from './ShelfChanger'

class Book extends Component {
    state = {
        shelf: ''
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
                                 backgroundImage: `url("${this.props.book.coverImage}")`
                             }}>
                        </div>

                        {/*Shelf Changer Component for each book*/}
                        <ShelfChanger/>
                    </div>
                    <div className="book-title">{this.props.book.title}</div>
                    <div className="book-authors">{this.props.book.author}</div>
                </div>

            </div>
        )
    }
}

export default Book
