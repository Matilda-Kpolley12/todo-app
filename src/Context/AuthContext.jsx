import {createContext, useState} from 'react';

export const AuthContext= createContext();
const AuthContextProvider = (props) => {
  const [auth, setAuth] = useState(false);
  return (
    <div>
      <AuthContext.Provider value={[auth, setAuth]}>
        {props.children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthContextProvider
