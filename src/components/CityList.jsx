import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import Anbaeteo from '../pages/cities/Anbaeteo';
import Andong from '../pages/cities/Andong';

function CityList(props) {
    const { cities } = props; // const cities = props.cities;

    return (
      <div className="city-list">
        <h1>CityList</h1>
        <Switch>
          <Route path="/cities/Anbaeteo">
            <Anbaeteo />
          </Route>
          <Route path="/cities/Andong">
            <Andong />
          </Route>
        </Switch>
        <ul className="navigation">
            {cities.map((item, index) => {
                return (
                  <li key={index}>
                    <Link to={"/cities/" + item}>{item}</Link>
                  </li>
                );
            })}
        </ul>
      </div>
    );
  }
  
  export default CityList;