import React, { Component } from 'react'

class ShelfChanger extends Component {
    constructor(props) {
        super();
        // State is obtained from the props of the given book so that the selected value persists as the book moves from shelf to shelf
        this.state.shelf = props.shelf
    }

    state ={
        shelf: ''
    };

    render() {
        return (
            <div>
                <div className="book-shelf-changer">
                    {/*Default value is set to the props passed from the book the shelfChanger is attached to*/}
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