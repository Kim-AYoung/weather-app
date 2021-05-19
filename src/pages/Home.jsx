import weather from '../weather.png';

function Home() {
    return(
        <div className="home">
            <h1>Home</h1>
            <img src={weather} alt="weather" />
            <p className="title">오늘의 날씨 정보</p>
        </div>
    )
}

export default Home;