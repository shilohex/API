import { useEffect, useState } from "react";
import "./App.css";

function UserList() {
  const [listOfUSer, setlistOfUSer] = useState([]);

  console.log(listOfUSer);
  useEffect(() => {
    function fetchlistOfUSer() {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((res) => setlistOfUSer(res))
        .catch((err) => setError(err));
    }
    fetchlistOfUSer();
  }, []);

  return (
    <>
      {listOfUSer && <p>{listOfUSer.name}</p>}
      <div className="user">
        <h1>User Name</h1>
        <div className="allusers">
          {listOfUSer.map((Users) => (
            <div className="box">
              <h3 key={Users.id}>{Users.name}</h3>
              <p>{Users.username}</p>
              <p>{Users.address.city}</p>
            </div>
          ))}
        </div>
      </div>
      <div></div>
    </>
  );
}

export default UserList;
