import ReactModal from "react-modal";
import React, { useState, useEffect } from "react";
import { InputDiv, Button } from "./Input";

export const UpdateModal = (props) => {
  const [title, setTitle] = useState(props.title);
  const [author, setAuthor] = useState(props.author);
  const [read, setRead] = useState(props.read);
  const [updateUrl, setUpdateUrl] = useState("");
  const [book, setBook] = useState({
    Title: "",
    Author: "",
    Read: false,
  });

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const onChangeAuthor = (e) => {
    setAuthor(e.target.value);
  };
  const onChangeRead = () => {
    setRead(!read);
  };

  useEffect(() => {
    setUpdateUrl(`http://localhost:9000/book/update/${props.bookId}`);
    if (book.Title !== "" || book.Author !== "") {
      fetch(updateUrl, {
        method: "PUT",
        mode: "cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(book),
      })
        /* .then(console.log(book)) */
        .then(props.setRender(!props.render));
    }
  }, [book, read, title, author]);

  return (
    <ReactModal isOpen={props.openState} closeTimeoutMS={700} ariaHideApp={false}>
      <InputDiv>
        <label htmlFor="Title">Title:</label>
        <input type="text" id="Title" value={title} onChange={onChangeTitle} />
        <label htmlFor="Author">Author:</label>
        <input type="text" id="Author" value={author} onChange={onChangeAuthor} />
        <label htmlFor="Read">Read:</label>
        <input type="checkbox" id="Read" onChange={onChangeRead} />
        <div>
          <Button
            onClick={() => {
              setBook({ Title: title, Author: author, Read: read });
            }}>
            Update book
          </Button>
        </div>
        <button className="closeBtn" onClick={() => props.setOpenState(false)}>
          x
        </button>
      </InputDiv>
    </ReactModal>
  );
};
