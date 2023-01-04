import { useState } from "react"
import { Link} from "react-router-dom"
//

const SignUp = () => {
    const[first_name, setfname] = useState("")
    const[last_name, setlname] = useState("")


  return (
   
    <div className = "Signup">
        <form className="signin">
            <label>first_name</label>
            <input type= "text"
                onChange={(e) => setfname(e.target.value)}
                value={first_name}     >

           </input>
            <label>last_name</label>
            <input type= "text"
            onChange={(e) => setlname(e.target.value)}
            value={last_name}         >

            </input>
        </form>
    </div>

)
} 

export default SignUp 