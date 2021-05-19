import { useEffect, useState } from "react";
import CityList from "../components/CityList"

function Cities() {
    const API_URL = "http://riotkr.mockable.io/weather-crawlers/cities" 
    
    const [cityState, setCityState] = useState([]); // cities를 return 문에서도 사용할 수 있음, cityState의 기본값 = []

    // hooks
    useEffect(() => {
        console.log("cities component mounted!");

        getCities();
      }, []); // mount됐을 때 한 번만 호출
    
    async function getCities() {
        const cities = await fetch(API_URL)
                             .then((res) => res.json()); // await : 동기적으로 API를 받아올 때 까지 기다림
        console.log(cities);    
        setCityState(cities);
    }
    
    return(
        <div className="cities">
            <h1>Cities</h1>

            <p>API URL: {API_URL}</p>
            <div>{JSON.stringify(cityState)}</div>

            <CityList cities={cityState} />
        </div>
    )
}

export default Cities;