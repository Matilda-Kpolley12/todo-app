let Person = (props) =>{
    // console.log(props)
    return(
        <div>
            <h1>My name is {props.name}</h1>
            <p>I am {props.age} years old.</p>
            <p>I am a {props.gender}</p>
        </div>
    )
}

export default Person