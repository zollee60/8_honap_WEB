import "./App.css";
/* import { useFetch } from "./components/useFetch"; */
import { useEffect, useState } from "react";
import styled from "styled-components";
import { v4 } from "uuid";
import { useFetch } from "./components/hooks";

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
  const [datas, setDatas] = useState(undefined);
  const [render, setRender] = useState(false);

  /*   const [data, loading] = useFetch(
    //data state, loading state from useFetch
    dataIn
  ); */

  useEffect(() => {
    fetch(deleteUrl, {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    }).then(() => {
      /* setUrl("http://localhost:9000/book/all"); */
      setRender(!render);
    });
  }, [deleteUrl]);

  useEffect(() => {}, [render]);

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
        console.log(response);
        setDatas(response);
      })
      .catch((err) => console.log(err));
  }, [dataIn, deleteUrl, render]);

  return (
    <div className="App">
      {!datas ? (
        <div>Loading...</div>
      ) : (
        datas.books.map((data, index) => {
          return (
            <CardDiv key={v4()}>
              <h3>{data.Title}</h3>
              <h4>by {data.Author}</h4>
              <p>Read: {data.Read && `\u2713`}</p>
              <button>Edit</button>
              <button
                onClick={() => {
                  setDeleteUrl(`http://localhost:9000/book/del/${data.id}`);
                }}>
                Delete
              </button>
            </CardDiv>
          );
        })
      )}
    </div>
  );
}

export default App;
