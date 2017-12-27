import React, { Component } from 'react'

class ShelfChanger extends Component {
    constructor(props) {
        super();
        this.state.shelf = props.shelf
    }

    state ={

    }

    render() {
        return (
            <div>
                <div className="book-shelf-changer">
                    <select onChange={this.props.onChangeValue} defaultValue={this.props.shelf}>
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