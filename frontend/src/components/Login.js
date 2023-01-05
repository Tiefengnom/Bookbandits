import { useState } from "react"
import { Link, NavLink, useNavigate} from "react-router-dom"
import { useUserContext } from "../hooks/useUserContext"
//


	

const Login = () => {
    const[first_name, setfname] = useState("")
    const[last_name, setlname] = useState("")
    const[userid, setUserid] = useState("")
    const [error, setError] = useState(null)
    const navigate = useNavigate();
    const {userID, setUserID} = useUserContext()
    

    const handleSubmit= async (e) => {
        e.preventDefault()
        

        const userdata = {first_name,last_name}

        const response = await fetch("http://localhost:4000/bookbandits/Login" , {
            method: "POST" ,
            body: JSON.stringify(userdata),
            headers: {
                "Content-Type" : "application/json"
            }
        })
        const json = await response.json()
        console.log(json)
        const id = json._id
        setUserID("")
        setUserID(id)
        console.log(userid)

        if (!response.ok) {
            setError(json.error)
     }
     if (response.ok) {
        setfname("")
        setlname("")
        setError(null)
        
        console.log(userID)
        console.log("Welcome, youre signed in")
     }
    }

  return (
   
    
    <div className = "Signup" >
        <form className="signin" onSubmit={handleSubmit}>
            <label>first_name</label>
            <input type= "text"
                onChange={(e) => setfname(e.target.value)}
                value={first_name}    />

           
            <label>last_name</label>
            <input type= "text"
            onChange={(e) => setlname(e.target.value)}
            value={last_name}         />
                           
            <button onClick={console.log("aaaa")}>Sign In</button>
                      
        </form>
        <NavLink to={{
                pathname: `/${userID}`
        }}  >Profile</NavLink>
        <div>{userid}</div>
    </div>

)
} 

export default Login 