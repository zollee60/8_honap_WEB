import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState([]); //adat state
  const [loading, setLoading] = useState(true); //loading state

  async function fetchUrl() {
    const response = await fetch(url);
    /* az await akkor teljesül amikor a promise resolved -> 
		akkor férünk hozzá a promise object value-hoz */
    const json = await response.json();
    //json object lesz a json változo
    setData(json);
    setLoading(false);
  }
  useEffect(() => {
    fetchUrl();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);
  return [data, loading];
}
export { useFetch };
