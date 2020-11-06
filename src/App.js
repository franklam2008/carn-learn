import React, { useState, useEffect, } from "react";
import axios from "axios";
import './App.css';

function App() {

  const [users, setUsers] = useState([]);
  useEffect(() => {
    const url = `https://api.github.com/users?since=1`;
    axios.get(url).then((response) => {
      setUsers((users) => [...users, ...response.data]);
    });
  }, []);
  console.log(users);
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Carnegie Learning Coding Test
        </p>

      </header>
    </div>
  );
}

export default App;
