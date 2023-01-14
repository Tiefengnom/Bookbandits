import { BorrowContext } from "../context/Borrowcontext";
import { useContext } from "react"

export const useUBContext = () => {
    const context = useContext(BorrowContext)

    if (!context) {
        throw Error("UserContext must be used inside an UserContextProvider")

    }

    return context

}