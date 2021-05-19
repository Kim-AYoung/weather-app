import logo from '../logo.svg';

function Header(props) {

  console.log("Header props: ", props);
  const city = props.cityName;
  const region = props.region;

  return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          현재 
          도시는: {city}, 
          지역은: {region} 
          입니다.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
  );
}

export default Header;
