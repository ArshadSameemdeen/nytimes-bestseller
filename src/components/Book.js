import React from 'react'
import './components.css'

const Book = ({book}) => {
    return (
        <body>
            <div className="container">
                <img className="image" alt="" src={book.book_image}/>
                <div className="list">
                    <h2>#{book.rank} {book.title}</h2>
                    <div className="about">
                        <p className="author">{book.author}</p>
                        <p className="description">{book.description}</p>
                    </div>
                    <a href={book.book_review_link} className="button">
                        <button>Read Full Review</button>
                    </a>
                </div>
            </div>
            <hr/>
        </body>
    )
}

export default Book
