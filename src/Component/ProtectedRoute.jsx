import {Route, Redirect} from 'react-router-dom'
import {useContext} from 'react'
import {AuthContext} from "../Context/AuthContext"

const ProtectedRoute = ({isLoggedIn, path, component: Component}) => {
    const [auth, setAuth] = useContext(AuthContext)
    
    if (auth){
        return <Route path={path} render={()=> <Component />}/>;
    }
    else {
        return <Redirect to="/login"/>
    }
  
};

export default ProtectedRoute
