import { useState } from "react"
import { Link, NavLink, useNavigate} from "react-router-dom"
import { useUserContext } from "../hooks/useUserContext"
//


	

const SignUp = () => {
    const[first_name, setfname] = useState("")
    const[last_name, setlname] = useState("")
    const[Adress, setAdress] = useState("")
    const[PLZ, setPLZ] = useState("")
    const[mail, setMail]= useState(null)
    const[userid, setUserid] = useState("")
    const [error, setError] = useState(null)
    const navigate = useNavigate();
    const {user, setUser} = useUserContext()
    

    const handleSubmit= async (e) => {
        e.preventDefault()
        

        const userdata = {first_name,last_name,Adress,PLZ,mail}

        const response = await fetch("http://localhost:4000/bookbandits/signup" , {
            method: "POST" ,
            body: JSON.stringify(userdata),
            headers: {
                "Content-Type" : "application/json"
            }
        })
        const json = await response.json()
        
        const id = json._id
        setUser(json)
        

        if (!response.ok) {
            setError(json.error)
     }
     if (response.ok) {
        setfname("")
        setlname("")
        setAdress("")
        setPLZ("")
        setError(null)
        
        
        console.log("Welcome, youre signed in")
     }
    }

  return (
   
    
    <div className = "Signin" >
        <form className="signin" onSubmit={handleSubmit}>
            <label>first_name</label>
            <input type= "text"
                onChange={(e) => setfname(e.target.value)}
                value={first_name}    />

           
            <label>last_name</label>
            <input type= "text"
                onChange={(e) => setlname(e.target.value)}
                value={last_name}         />

            <label>Adress</label>
            <input type= "text"
                onChange={(e) => setAdress(e.target.value)}
                value={Adress}    />

            <label>PLZ</label>
            <input type= "text"
                onChange={(e) => setPLZ(e.target.value)}
                value={PLZ}    />
                           
            <button >Sign Up</button>
            <label>
                <input
                    type="radio"
                    name="radio-group"
                    value="Yes"
                    onClick={(e) => {setMail(e.target.value); console.log(e.target.value)}}
                  // 
                    />
                    <span>Yes</span>
            </label>   
            <label>
                <input
                type="radio"
                name="radio-group"
                value="No"
                defaultChecked
                
                onClick={(e) => setMail(e.target.value)}
                />
                <span>No</span>
            </label>
                      
        </form>
        <NavLink to={{
                pathname: `/${user._id}`
        }}  >Profile</NavLink>
        <div>{userid}</div>
    </div>

)
} 

export default SignUp 