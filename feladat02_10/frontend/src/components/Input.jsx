import styled from "styled-components";
import React, { useState, useEffect } from "react";

const InputDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  margin: 2rem auto;
  align-items: center;
  justify-content: center;
`;

export const Input = (props) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [read, setRead] = useState("");
  const [postUrl, setPostUrl] = useState("http://localhost:9000/book/create");
  const [book, setBook] = useState({
    Title: "",
    Author: "",
    Read: false,
  });
  const [reRender, setReRender] = useState(false);

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const onChangeAuthor = (e) => {
    setAuthor(e.target.value);
  };
  const onChangeRead = (e) => {
    setRead(!read);
  };

  useEffect(() => {
    if (book.Title !== "" && book.Author !== "") {
      fetch(postUrl, {
        method: "POST",
        mode: "cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(book),
      })
        .then(console.log(book))
        .then(props.setRender(reRender))
        .then(setReRender(!reRender));
    }
  }, [book]);

  return (
    <>
      <InputDiv>
        <label htmlFor="Title">Title:</label>
        <input type="text" id="Title" onChange={onChangeTitle} />
        <label htmlFor="Author">Author:</label>
        <input type="text" id="Author" onChange={onChangeAuthor} />
        <label htmlFor="Read">Read:</label>
        <input type="checkbox" id="Read" onChange={onChangeRead} />
        <div>
          <button
            onClick={() => {
              setBook({ Title: title, Author: author, Read: read });
            }}>
            new book
          </button>
        </div>
      </InputDiv>
    </>
  );
};
