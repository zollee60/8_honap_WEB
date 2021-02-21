/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import styled from "styled-components";
import React, { useState, useEffect } from "react";

export const InputDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  margin: 2rem auto;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  padding: 0.5rem;
  margin: 1rem auto;
`;

export const Input = (props) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [read, setRead] = useState(false);
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
  const onChangeRead = () => {
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
        .then(props.setRender(!props.render))
        .then(setAuthor(() => ""))
        .then(setTitle(() => ""));
    }
  }, [book]);

  return (
    <>
      <InputDiv>
        <label htmlFor="Title">Title:</label>
        <input type="text" id="Title" onChange={onChangeTitle} value={title} />
        <label htmlFor="Author">Author:</label>
        <input type="text" id="Author" onChange={onChangeAuthor} value={author} />
        <label htmlFor="Read">Read:</label>
        <input type="checkbox" id="Read" onChange={onChangeRead} />
        <div>
          <Button
            onClick={() => {
              setBook({ Title: title, Author: author, Read: read });
            }}>
            Add new book
          </Button>
        </div>
      </InputDiv>
    </>
  );
};
