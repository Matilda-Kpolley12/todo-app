import {createContext, useState} from "react"
export const UserContext = createContext("Patrick");

const UserContextProvider = (props) => {
    const [user, setUser] =useState("Guest User")
    return (
      <div>
        <UserContext.Provider value={[user, setUser]}>
          {props.children}
        </UserContext.Provider>
      </div>
    );
}

export default UserContextProvider;
