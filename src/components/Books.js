import React from 'react'
import Book from './Book' 
const Books = ({books}) => {
    console.log(books)
    return (
        <div className="Books">
        <h1 className="heading">NYTimes Best Sellers - Hardcover Fiction</h1>
            {books.map((book)=>(    
                <Book className="Book" key={book.id} book={book} />
            ))}
            
        </div>
    )
}


export default Books
