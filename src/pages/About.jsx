function About(props) {
    const name = props.name;
    const studentId = props.studentId;
    const lecture = props.lecture;
    const teamId = props.teamId;

    return(
        <div className="about">
            <h1>About</h1>
            <p>수업 : {lecture}</p>
            <p>조 : {teamId}</p>
            <p>학번 : {studentId}</p>
            <p>이름 : {name}</p>
        </div>
    )
}

export default About;