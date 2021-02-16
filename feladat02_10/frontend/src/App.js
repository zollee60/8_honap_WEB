import "./App.css";
/* import { useFetch } from "./components/useFetch"; */
import { useEffect, useState } from "react";
import styled from "styled-components";
import { v4 } from "uuid";

const CardDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  max-width: 250px;
  min-width: 120px;
  border: 1px solid black;
  margin: 2em;
`;

function App() {
  const [dataIn, setUrl] = useState("http://localhost:9000/book/all");

  const [deleteUrl, setDeleteUrl] = useState("");
  const [data, setData] = useState(undefined);

  useEffect(() => {
    fetch(deleteUrl, {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    }).then(setDeleteUrl("delete successful"));
  }, [deleteUrl]);

  useEffect(() => {
    fetch(dataIn, {
      method: "GET",
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setData(response);
        /* console.log(typeof response) */
      });
  }, [dataIn, deleteUrl]);

  console.log(dataIn);
  console.log(data);

  return (
    <div className="App">
      {data !== undefined &&
        data.books.map((data, index) => {
          return (
            <CardDiv key={v4()}>
              <h3>{data.Title}</h3>
              <h4>by {data.Author}</h4>
              <p>Read: {data.Elolvasva && `\u2713`}</p>
              <button>Edit</button>
              <button
                onClick={() => {
                  setDeleteUrl(`http://localhost:9000/book/del/${data.id}`);
                  console.log(data);
                }}>
                Delete
              </button>
            </CardDiv>
          );
        })}
    </div>
  );
}

export default App;
