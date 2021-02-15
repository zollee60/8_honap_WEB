import "./App.css";
import { useFetch } from "./components/useFetch";
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
  const [dataIn, setUrl] = useFetch("http://localhost:9000/book/all");

  console.log(dataIn);

  return (
    <div className="App">
      {dataIn !== undefined &&
        dataIn.books.map((data, index) => {
          return (
            <CardDiv key={v4()}>
              <h3>{data.Title}</h3>
              <h4>by {data.Author}</h4>
              <p>Elolvasva: {data.Elolvasva && `\u2713`}</p>
            </CardDiv>
          );
        })}
    </div>
  );
}

export default App;
