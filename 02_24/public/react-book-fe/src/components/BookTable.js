import BookTableRow from "./BookTableRow";

export default function BookTable(props) {

  const deleteRow = async (id) => {
    const res = await fetch(`http://localhost:4000/book/${id}`, {
                method: 'DELETE'
    });
    const data = await res.json();
    props.setBooks(data.books);
  }

  const updateFinished = async (data) => {
    await fetch(`http://localhost:4000/book/update/${data.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const newState = props.books.map((book) => {
      if (book.id === data.id) book.finished = data.finished;
      return book;
    });
    console.log(newState);
    props.setBooks(newState);
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
          {props.books.map(book => <BookTableRow data={book} delete={deleteRow} update={updateFinished} key={book.id} />)}
        </tbody>
      </table>
    </div>
  );
}
