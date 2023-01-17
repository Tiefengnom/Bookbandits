import {createContext, useReducer} from "react"

export const AuthContext = createContext()

export const authReducer = (state,action) => {
switch (action.type) {
    case "LOGIN" : 
    return {user : action.payload}
    case "LOGOUT" : 
    return {user: null}
    default:
        return state
}
}

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(authReducer, {
        userpassword: null
    })

console.log("AuthContext state: ", state)

return (
<AuthContextProvider value={{...state, dispatch}}>
{children}
</AuthContextProvider>
)
}