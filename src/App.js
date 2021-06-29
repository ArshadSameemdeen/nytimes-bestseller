import './App.css';
import Books from './components/Books';
import {useState, useEffect} from 'react'

function App() {
  const url = 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=kejAhwRat3GkPqI4tLiCaU2AHSzzfwYu'
  const [books, setBooks] = useState([])

  const fetchData = async () =>{
    const responce = await fetch(url)
    const data = await responce.json()
    setBooks(data.results.books)
    
  }

  useEffect(() => {
    fetchData()
    
  },[])


  return (
    <Books books={books}/>
  );
}

export default App;
