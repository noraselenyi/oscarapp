import logo_oscars from './logo_oscars.jpg';
import Filmlist from './components/filmlist';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <img src={logo_oscars} className="oscarlogo" alt="logo" />
      </header>
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
        <div className=''>
        <p>  </p>
        <p> LOGIN </p>
        <p>  </p>
        <Filmlist />
        <p>here comes the list </p>
          
        </div>
    </div>
  );
}

export default App;
