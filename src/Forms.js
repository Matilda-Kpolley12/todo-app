import {useState} from "react"

const Forms = () =>{
    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        gender: ""
    }
    );

    const handleChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setState({ ...state, [name]: value})

    }

    return(
        <>
            
            <form action="">
                <h1>Form</h1>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" name="firstName" value = {state.firstName}
                     onChange = {handleChange}/>
                </div>

                <div>
                    <label htmlFor="lasttName">Last Name</label>
                    <input type="text" name="lastName" value = {state.lastName} 
                    onChange =  {handleChange} />
                </div>

                <div>
                    <label htmlFor="email">Email address</label>
                    <input type="email"  name="email" placeholder="Enter yourEmail Address" value = {state.email} 
                    onChange = {handleChange}/>
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password"  placeholder="Enter your Password" value = {state.password} 
                    onChange = {handleChange}/>
                </div>
                <div>
                    <label htmlFor="gender">Gender</label>
                    <select name="gender" id="gender" value = {state.gender} onChange = {handleChange}>
                        <option value="male"> Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
            </form>

            <hr/>
            <div class="setValue">
                <p>First Name: {state.firstName}</p>
                <p>Last Name: {state.lastName}</p>
                <p>Email: {state.email}</p>
                <p>Password: {state.password}</p>
                <p>Gender: {state.gender}</p>
            </div>

        </>
    );
}
export default Forms;