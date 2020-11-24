import logo from './logo.svg';
import './App.css';
import Menu from './composent/menu'
import MenuSemaine from './composent/menu_semaine'
import Aliment from './composent/aliment'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
            <MenuSemaine />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
