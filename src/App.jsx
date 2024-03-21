import { useEffect, useState } from "react";
import "./App.css";
import UserList from "./UserList";

function App() {
  // const [data, setData] = useState("");
  // const [error, setError] = useState("");
  // console.log(data);
  // useEffect(() => {
  //   function fetchData() {
  //     fetch("https://hn.algolia.com/api/v1/search?query=redux")
  //       .then((res) => res.json())
  //       .then((res) => setData(res))
  //       .catch((err) => setError(err));
  //   }
  //   fetchData();
  // }, []);

  return (
    <>
      {/* {data && <p>{data.hitsPerPage}</p>} */}

      <UserList />
    </>
  );
}

export default App;
