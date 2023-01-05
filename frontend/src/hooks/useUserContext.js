import { UserContext } from "../context/Usercontext";
import { useContext } from "react"

export const useUserContext = () => {
    const context = useContext(UserContext)

    if (!context) {
        throw Error("UserContext must be used inside an UserContextProvider")

    }

    return context

}