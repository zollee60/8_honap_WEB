import logo from './logo.svg';
import './App.css';
import NewBookForm from './components/NewBookForm';
import BookTable from './components/BookTable';
import { useState, useEffect } from "react";

function App() {

  const [books, setBooks] = useState([]);

  const fetchData = async () => {
    const response = await fetch("http://localhost:4000/book/all");
    const data = await response.json();
    setBooks(data.books);
  }

  useEffect( () => {
    
    fetchData();

  },[]);

  return (
    <div className="App">
      <NewBookForm setBooks={setBooks} books={books}/>
      <BookTable setBooks={setBooks} books={books}/>
    </div>
  );

}

export default App;
