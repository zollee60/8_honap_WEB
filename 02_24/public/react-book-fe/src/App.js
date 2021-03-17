import logo from './logo.svg';
import './App.css';
import NewBookForm from './components/NewBookForm';
import BookTable from './components/BookTable';
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { initBooks } from './store/bookSlice';

function App() {

  const [books, setBooks] = useState([]);

  const dispatch = useDispatch();

  const fetchData = async () => {
    const response = await fetch("http://localhost:4000/book/all");
    const data = await response.json();
    dispatch(initBooks(data.books));
  }

  useEffect( () => {
    
    fetchData();

  },[]);

  return (
    <div className="App">
      <NewBookForm/>
      <BookTable/>
    </div>
  );

}

export default App;
