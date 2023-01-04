import { createContext } from "react";
import { useState } from "react";

export const UserContext = createContext()

export const UserContextProvider = ({ children }) => {
const [userID, setUserID] = useState("")


return (
<UserContext.Provider value = {{userID}}>
    { children }
</UserContext.Provider>

)

}