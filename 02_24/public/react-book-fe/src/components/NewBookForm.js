import { useState } from "react";
import "./style.css";

function NewBookForm() {

  const [title, setTitle] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

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
          <input type="text" id="author" className="form-control" />
          <label htmlFor="published_at">Published at</label>
          <input type="number" id="published_at" className="form-control" />
          <label htmlFor="finished">Finished</label>
          <input type="checkbox" name="finished" id="finished" />
          <div>
            <input id="add" type="button" className="btn btn-success" value="Add" />
          </div>
        </fieldset>
      </form>
      <h1>Values:</h1>
      <h2>{title}</h2>
    </div>
  );
}

export default NewBookForm;
