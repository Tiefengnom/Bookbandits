import { createContext } from "react";
import { useState } from "react";

export const BorrowContext = createContext()

export const BorrowContextProvider = ({ children }) => {
const [bBooks, setbBooks] = useState([])


return (
<BorrowContext.Provider value = {{bBooks, setbBooks}}>
    { children }
</BorrowContext.Provider>

)

}