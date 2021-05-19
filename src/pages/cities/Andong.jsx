import andong from '../../andong.png'

function Andong() {
    return (
        <div className="temperatures">
            <h2>Andong</h2>
            <img src={andong} alt="andong" />
            <p>현재 Andong의 기온은 30도 입니다.</p>
        </div>
    );
}

export default Andong;