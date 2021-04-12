import {useState, useEffect} from "react"
import {useParams, useHistory} from 'react-router-dom'

const ProfileDetail = () => {

    const [student, setStudent] = useState({});
    const params = useParams();
    const history = useHistory()

    useEffect(() => {
      const fetchData = async () => {
        const data = await fetch(`http://localhost:4000/students/${params.userId}`);
        const result = await data.json();
        setStudent(result);
      };

      fetchData();
    }, []);
    return (
      <div>
        <h1>Profile Detail</h1>
        <hr />
        <h1>{`${student.first_name} ${student.last_name}`}</h1>
        <p>
          <strong>Gender:</strong> {student.gender}
        </p>
        <p>
          <strong>Email:</strong> {student.email}
        </p>
        <p>
          <strong>Class:</strong> {student.ip_address}
        </p>
        <button onClick={() => history.goBack()}>Go Back</button>
        <button onClick={() => history.push("/")}>Go Home</button>
      </div>
    );
}

export default ProfileDetail
