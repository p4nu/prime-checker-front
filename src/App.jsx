import React from 'react';
import './App.css';

import Notification from './components/Notification';
import checkPrime from './services/checkPrime';
import sumAndCheck from './services/sumAndCheck';

function App() {
  const [query, setQuery] = React.useState('');
  const [notification, setNotification] = React.useState({
    message: '',
    type: '',
  });

  const sendQuery = async (e) => {
    e.preventDefault();

    try {
      let responseData;

      if (query.includes(',')) {
        responseData = await sumAndCheck(query);

        setNotification({
          message: `{ result: ${responseData.result}, isPrime: ${responseData.isPrime} }`,
          type: 'success',
        });

        return;
      }
      responseData = await checkPrime(query);

      setNotification({
        message: `{ isPrime: ${responseData.isPrime} }`,
        type: 'success',
      });
    } catch (err) {
      setNotification({
        message: err.toString(),
        type: 'error',
      });
    }
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

      {notification.message !== '' && (
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
