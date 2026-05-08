function Student(props){
    return(
        <div className="student-card">
            <h2>{props.name}</h2>
            <p>course:{props.course}</p>
            <p>marks:{props.marks}</p>
            
        </div>
    );

}
export default Student;