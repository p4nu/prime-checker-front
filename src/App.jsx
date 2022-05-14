import React from 'react';
import './App.css';

function App() {
  const [query, setQuery] = React.useState('');

  const sendQuery = (e) => {
    e.preventDefault();
    console.log(query);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Prime checker tester</h1>
      </header>

      <section>
        <h2>Input</h2>

        <input
          type="text"
          value={query}
          onChange={(input) => setQuery(input.target.value)}
        />

        <button
          type="submit"
          onClick={sendQuery}
        >
          Check
        </button>
      </section>
    </div>
  );
}

export default App;
