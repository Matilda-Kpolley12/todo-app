import { useContext } from "react";
import { UserContext } from "../Context/UserContext";

const SevicePage = () => {
    const [user, setUser] = useContext(UserContext)
  return (
    <div>
      <h1>Service Page</h1>
      <h3>
        <i>Current User</i>:{user}
      </h3>
      <button onClick={() => setUser("Service")}>Click Me</button>
    </div>
  );
};

export default SevicePage;
