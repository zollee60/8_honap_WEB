import { useState } from "react";
import "./style.css";

function NewBookForm(props) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishedAt, setPublishedAt] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

  const handlePublishedAtChange = (event) => {
    setPublishedAt(event.target.value);
  };

  const handleFinishedChange = (event) => {
    setFinished(event.target.checked);
  };

  const handleAddClick = async () => {
    const newBook = {
      title: title,
      author: author,
      published_at: publishedAt,
      finished: finished
    }

    await fetch("http://localhost:4000/book/add",
    {
        method: 'POST',
        
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newBook)
    });

    const newBookList = [...props.books, newBook];
    props.setBooks(newBookList);
  }

  return (
    <div className="properties">
      <form>
        <fieldset>
          <legend className="text-center">Add a new Book</legend>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            className="form-control"
            onChange={handleTitleChange}
          />
          <label htmlFor="author">Author</label>
          <input
            type="text"
            id="author"
            className="form-control"
            onChange={handleAuthorChange}
          />
          <label htmlFor="published_at">Published at</label>
          <input
            type="number"
            id="published_at"
            className="form-control"
            onChange={handlePublishedAtChange}
          />
          <label htmlFor="finished">Finished</label>
          <input
            type="checkbox"
            name="finished"
            id="finished"
            onChange={handleFinishedChange}
          />
          <div>
            <input
              id="add"
              type="button"
              className="btn btn-success"
              value="Add"
              onClick={handleAddClick}
            />
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default NewBookForm;
