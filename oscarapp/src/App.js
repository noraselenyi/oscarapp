import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to the Oscar app
        </p>
        <a
          className="App-link"
          href="https://www.imdb.com/list/ls080103875/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Predictions for 2022
        </a>
      </header>
    </div>
  );
}

export default App;
