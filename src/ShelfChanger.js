import React, { Component } from 'react'

class ShelfChanger extends Component {
    render() {
        return (
            <div>
                <div className="book-shelf-changer">
                    <select onChange={this.props.onChangeValue}>
                        <option value="none" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
            </div>
        )
    }
}

export default ShelfChanger