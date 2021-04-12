import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import { useContext } from "react";
import { UserContext } from "../Context/UserContext";

const ProfilePage = () => {
    const [user, setUser] = useContext(UserContext)
    const [students, setStudents] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch("http://localhost:4000/students")
            const result = await data.json();
            setStudents(result)
        };

        fetchData();
    }, []);
    return (
      <div>
        <h1>Student's List</h1>
        <h3>
          <i>Current User</i>:{user}
        </h3>
        <button onClick={() => setUser("Profile")}>Click Me</button>
        <ul>
          {students.map((students) => (
            <li key={students.id}>
              <Link
                to={`/profile/${students.id}`}
              >{`${students.first_name} ${students.last_name}`}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
}

export default ProfilePage
