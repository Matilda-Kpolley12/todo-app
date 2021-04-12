import {useState} from "react";

const Events = () =>{

    // const handleClick = () =>console.log("You've clicked me")
    const [password, setPassword] = useState("");
    const [confirmPassword, setConFirmPassword] = useState("")
    
    const handleBlur = () => {
        if (password === confirmPassword){
            alert("You are registered");
        }

        else{
            alert("Password do not match!");
        }
    }


    // console.log(password)
    return(
        <div>
            <h1>Events</h1>
            {/* <button  onClick = {handleClick}>Click Me</button> */}
            <label htmlFor="">Password</label>
            <input type="password" name = "password" id = "password" value = {password}
             
            onChange = {(e) => setPassword(e.target.value)} 
            onFocus = {(e) => console.log("I am focus")}/>
            <label htmlFor="">ConfirmPassword</label>
            <input type="password" name = "confirmPassword" id= "confirmPassword" value = {confirmPassword} onChange = {(e) => setConFirmPassword(e.target.value)} onBlur = {handleBlur}/>
        </div>
    )
}
export default Events;