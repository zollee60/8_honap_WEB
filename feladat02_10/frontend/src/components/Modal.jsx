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
    props.setTitle(e.target.value);
  };
  const onChangeAuthor = (e) => {
    props.setAuthor(e.target.value);
  };
  const onChangeRead = () => {
    props.setRead(!props.read);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [book, props.read, props.title, props.author]);

  return (
    <ReactModal
      {...props}
      isOpen={props.openState}
      closeTimeoutMS={700}
      ariaHideApp={false}>
      <InputDiv>
        <label htmlFor="Title">Title:</label>
        <input type="text" id="Title" value={props.title} onChange={onChangeTitle} />
        <label htmlFor="Author">Author:</label>
        <input type="text" id="Author" value={props.author} onChange={onChangeAuthor} />
        <label htmlFor="Read">Change read status:</label>
        <input type="checkbox" id="Read" value={props.read} onChange={onChangeRead} />
        <div>
          <Button
            onClick={() => {
              setBook({ Title: props.title, Author: props.author, Read: props.read });
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
