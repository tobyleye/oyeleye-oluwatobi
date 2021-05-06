import { useState } from "react";
import "./styles.css";

function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState("");

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(query);
        }}
      >
        <input
          type="text"
          required
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

function search(arr1, query) {
  const path = [];

  function pathfinder(arr1, q, path = []) {
    if (typeof arr1 === "object") {
    }
  }
}

export default function App() {
  const [result, setResult] = useState("");

  const search = (query) => {
    console.log("searching for ...", query);
  };

  return (
    <div className="App">
      <h1>Path Getter</h1>
      <Searchbar onSubmit={search} />
    </div>
  );
}
