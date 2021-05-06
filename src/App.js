import { useState } from "react";
import "./styles.css";

function search(source, query, path = null) {
  // search function here;
  if (Array.isArray(source)) {
    for (let i = 0; i < source.length; i++) {
      const item = source[i];
      const newPath = path + `[${i}]`;
      let result = search(item, query, newPath);
      if (result) {
        return result;
      } else {
        continue;
      }
    }
  } else if (typeof source === "object") {
    for (let key in source) {
      let newPath = path === null ? key : path + "." + key;
      let result = search(source[key], query, newPath);
      if (result) {
        return result;
      } else {
        continue;
      }
    }
  } else if (source === query) {
    return path;
  }
  return null;
}

export default function App() {
  const [result, setResult] = useState("");
  const [source, setSource] = useState(`
  {
    "user": {
      "id": 1,
      "name": {
        "firstName": "James",
        "lastName": "Ibori"
      },
      "location": {
        "city": "Ikoyi",
        "state": "Lagos",
        "address": "One expensive house like that"
      }
    }
  }
  `);
  const [query, setQuery] = useState("Ibori");

  const handleSubmit = (e) => {
    e.preventDefault();
    let parsedSource;
    try {
      parsedSource = JSON.parse(source);
    } catch (err) {
      alert("Enter a valid json object");
      return;
    }
    const result = search(parsedSource, query);

    setResult(result);
  };

  return (
    <div className="App">
      <h1>Path Getter</h1>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="source">Source:</label>
          <textarea
            required
            id="source"
            value={source}
            onChange={(e) => {
              setSource(e.target.value);
            }}
            placeholder="source"
          ></textarea>
        </div>

        <div className="field">
          <label htmlFor="query">Query</label>
          <input
            id="query"
            type="text"
            required
            value={query}
            placeholder="query"
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <button type="submit">Submit</button>
      </form>

      {result && (
        <div className="result">
          Result is
          <br />
          <span>{result}</span>
        </div>
      )}
    </div>
  );
}
