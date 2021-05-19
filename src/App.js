import './App.css';
import Header from './components/Header'; // .jsx 생략 가능
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './pages/About';
import Cities from './pages/Cities';
import Home from './pages/Home';

function App() {
  const city = 'Daejeon';
  const name = '김아영';
  const studentId = '201800881'
  const lecture = '실전코딩'
  const teamId = '19조'

  return (
    <Router>
      <div className="App">
        <Header region="KR" cityName={city}/>
        <ul className="navigation">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/cities">Cities</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/about">
            <About name={name} studentId={studentId} lecture={lecture} teamId={teamId}/>
          </Route>
          <Route path="/cities">
            <Cities />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
