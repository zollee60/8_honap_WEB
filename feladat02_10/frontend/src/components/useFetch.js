import { useState, useEffect } from "react";

export const useFetch = (initUrl) => {
  const [url, setUrl] = useState(initUrl);
  const [data, setData] = useState(undefined);

  useEffect(() => {
    fetch(url, {
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.status !== 200) return "There must be a problem";
        return response.json();
      })
      .then((json) => setData(json));
  }, [url]);

  return [data, setUrl];
};

export const useFetchDelete = (initUrl) => {
  const [url, setUrl] = useState(initUrl);
  const [data, setData] = useState(undefined);

  useEffect(() => {
    fetch(url, {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    }).then(console.log("deleted successful"));
  }, [url]);

  return [data, setUrl];
};
