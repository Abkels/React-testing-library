import logo from './logo.svg';
import './App.css';

function App() {
  const a = 3;
  const b = 3;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ul>
          <li>Apple</li>
          <li>Banana</li>
          <li>Orange</li>
          <h1 data-testid='mytestid'>Hello</h1>
          <span title='sum'>{a+b}</span>
        </ul>
      </header>
    </div>
  );
}

export default App;
