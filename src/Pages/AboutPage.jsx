import { useContext } from "react";
import { UserContext } from "../Context/UserContext";

const AboutPage = () => {
     const [user, setUser] = useContext(UserContext);
  return (
    <div>
      <h1>About page</h1>
      <h3>
        <strong>Current User</strong>:{user}
      </h3>
      <button onClick ={() => setUser("Service")}>Click Me</button>
    </div>
  );
};

export default AboutPage;
