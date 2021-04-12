import {useContext} from 'react'
import {UserContext} from '../Context/UserContext'
// import {useParams} from "react-router-dom";

const HomePage = () => {
  // const params = useParams()
   const [user, setUser] = useContext(UserContext)
    return (
      <div>
        <h1>Home Page</h1>
        <h3>
          <strong>User</strong>:{user}
        </h3>
        <button onClick={() => setUser("Home")}>Click Me</button>
      </div>
    );
}

export default HomePage;
