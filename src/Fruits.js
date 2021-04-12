import {useState} from 'react'

function Fruits() {
    const [fruits, setFruits] = useState(["Mango","Apple", "Pear"])
    const [value, setValue] = useState("")

    const handleChange = (e) =>{
        setValue(e.target.value)
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        setFruits(...fruits,value)
    }
    return (
        <div>
            <ul>
                {fruits.map((fruit) => (<li>{fruit}</li>))}
            </ul>
            <form action="" onSubmit = {handleSubmit}>
                <input type="text" placeholder="Add a fruit" value = {value}oncchange = {handleChange}/>
                <button type="submit">Add Fruit</button>
            </form>
        </div>
    )
}

export default Fruits
