import React from 'react';
import axios from 'axios';
import './App.css';

import Notification from './components/Notification';

function App() {
  const [query, setQuery] = React.useState('');
  const [notification, setNotification] = React.useState(null);

  const sendQuery = (e) => {
    e.preventDefault();

    if (query.includes(',')) {
      axios
        .get('/api/sumAndCheck', {
          params: {
            numbers: query,
          },
        })
        .then((res) => {
          setNotification({
            message: res.data,
            type: 'success',
          });
        })
        .catch((err) => {
          setNotification({
            message: err,
            type: 'error',
          });
        });

      return;
    }
    axios
      .get('/api/checkPrime', {
        params: {
          number: query,
        },
      })
      .then((res) => {
        setNotification({
          message: res.data,
          type: 'success',
        });
      })
      .catch((err) => {
        setNotification({
          message: err,
          type: 'error',
        });
      });
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
          Check
        </button>
      </section>

      {notification && (
        <section>
          <h2>Output</h2>

          <Notification
            message={notification.message}
            type={notification.type}
          />
        </section>
      )}

      <footer className="App-footer">
        <p>
          (c) 2022 -
          {' '}
          <a className="App-link" href="https://www.github.com/p4nu">Panu Valtanen</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
