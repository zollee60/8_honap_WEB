import BookTableRow from "./BookTableRow";
import { selectBooks } from "../store/bookSlice";
import { useSelector, useDispatch } from "react-redux";
import { deleteBook, updateF } from '../store/bookSlice';

export default function BookTable() {
  
  const dispatch = useDispatch();
  const bookStore = useSelector(selectBooks);

  const deleteRow = async (id) => {
    const res = await fetch(`http://localhost:4000/book/${id}`, {
                method: 'DELETE'
    });
    const data = await res.json();
    dispatch(deleteBook(id));
  }

  const updateFinished = async (data) => {
    await fetch(`http://localhost:4000/book/update/${data.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    dispatch(updateF(data));
  }

  return (
    <div className="books">
      <table className="table table-dark" id="bookTable">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Published</th>
            <th>Finished</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody id="bTable">
          {bookStore.map(book => <BookTableRow data={book} delete={deleteRow} update={updateFinished} key={book.id} />)}
        </tbody>
      </table>
    </div>
  );
}
