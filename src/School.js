let School = (props) =>{
    
    return(
        <div>
            <h1>The name of my School is {props.name}</h1>
            <p>It is located at {props.location}</p>
            <p>They offer {props.numberOfCourses}</p>
        </div>
    )
}

export default School