import './App.css';
import Header from './components/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const city = 'Seoul';

  return (
    <Router>
      <div className="App">
        <Header region="KR" city={city}/>
        <ul className="menu">
          <li>Home</li>
          <li>About</li>
          <li>Citis</li>
        </ul>
      </div>
    </Router>
  );
}

export default App;
