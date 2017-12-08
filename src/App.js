import React from 'react'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import './BookShelf'
import Header from './Header'
import BookShelf from "./BookShelf"
import SearchBooks from "./SearchBooks"

class BooksApp extends React.Component {
    // Mock for Currently Reading Array
    currentlyReading = [
        {
            title: 'To Kill a Mockingbird',
            author: 'Harper Lee',
            coverImage: "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api"
        },
        {
            title: 'Enders Game',
            author: 'Orson Scott Card',
            coverImage: "http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api"
        }
    ];

    wantToRead = [
        {
            title:'1776',
            author:'David McCollough',
            coverImage: "http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api"
        },
        {
            title:'Harry Potter and the Sorcerer\'s Stone',
            author: 'J.K. Rowling',
            coverImage:"http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api"
        }

    ];

    read = [
        {
            title: 'The Hobbit',
            author: 'J.R.R. Tolkien',
            coverImage: "http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api"
        },
        {
            title: 'Oh the Places you Will Go',
            author: 'Dr. Suess',
            coverImage: "http://books.google.com/books/content?id=1q_xAwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE712CA0cBYP8VKbEcIVEuFJRdX1k30rjLM29Y-dw_qU1urEZ2cQ42La3Jkw6KmzMmXIoLTr50SWTpw6VOGq1leINsnTdLc_S5a5sn9Hao2t5YT7Ax1RqtQDiPNHIyXP46Rrw3aL8&source=gbs_api"
        }
    ];

    state = {
        allBooks: []
    };

    // componentDidMount() {
    //     BooksAPI.getAll().then((books) => {
    //         this.props.books = books;
    // };

    componentDidMount() {
        BooksAPI.getAll().then((allBooks) => {
            this.setState({ allBooks })
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
                                <BookShelf shelfName={'Currently Reading'} bookList={this.currentlyReading} />
                                <BookShelf shelfName={'Want to Read'} bookList={this.wantToRead} />
                                <BookShelf shelfName={'Read'} bookList={this.read} />
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
