import {useState} from "react"

const ToDo = () =>{

    const [todoList, setTodoList] = useState([ "Mango", "Apple"]);
    const [todo, setTodo] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        if (todo !== ""){
        setTodoList([...todoList, todo]);
        setTodo("")
    }
    }

    return(
        <div>
            <h1>
                ToDo Application
            </h1>
            <form onSubmit = {(e) => handleSubmit(e)}>
                <input type= "text" name="todo" value = {todo} onChange = {(e) => setTodo(e.target.value)}/>
                <button type = "submit">Add ToDo</button>
            </form>
            

            <ol>
                {
                    todoList.map((todo) => (
                        <li>{todo}</li>
                    ))
                }
            </ol>
        </div>
    );
}
export default ToDo;