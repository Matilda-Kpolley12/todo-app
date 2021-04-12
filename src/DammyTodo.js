import {useState} from "react";

const DammyToDo = () => {
    const [toDos, setTodos] = useState(["Groundnut", "Fish", "Onion", "Salt"]);
    const [toDo, setToDo] = useState("")

    const handleSubmit =  (e) => {
        e.preventDefault();
        setTodos([...toDos, toDo]);
        setToDo("");
    };
    return(
        <div>
            <h1>
                ToDo Application
            </h1>
            <ul>
                {toDos.map(todo => <li>{todo}</li>)}
            </ul>

            <form onSubmit ={handleSubmit} >
                <input type="text" value={toDo} name = "todo" onChange = {(e) => setToDo(e.target.value)}/>
                <button type ="submit">Add ToDo</button>
            </form>
        </div>
    )
}
export default DammyToDo ;