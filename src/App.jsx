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

        <p>
          Tip: When querying with multiple integers, separate the numbers with ,. For example:
          {' '}
          <code>1,2,3</code>
        </p>

        <input
          type="text"
          value={query}
          onChange={(input) => setQuery(input.target.value)}
        />

        <button
          type="submit"
          onClick={sendQuery}
        >
          Check with one integer
        </button>

        <button
          type="submit"
          onClick={sendQuery}
        >
          Check with multiple integers
        </button>
      </section>

      <footer className="App-footer">
        <p>
          (c) 2022 -
          {' '}
          <a className="App-link" href="www.github.com/p4nu">Panu Valtanen</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
