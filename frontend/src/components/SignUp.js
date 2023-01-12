import { useState } from "react"
import { NavLink, useNavigate} from "react-router-dom"
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
   
    
    <div className = "Signin mt-20 bg-gradient-to-br from-yellow-500 to-pink-600 h-full " >
        {!user ? <form className="signin" onSubmit={handleSubmit}>
            <label>first_name</label>
            <input type= "text"
                onChange={(e) => setfname(e.target.value)}
                value={first_name}   className=" text-orange-700 bg-white bg-opacity-20 rounded-full border-2 border-transparent focus:border-white focus:border-opacity-50 focus:outline-none px-3 py-1 leading-none text-sm  transition-colors placeholder-white placeholder-opacity-50 m-2" />

           
            <label>last_name</label>
            <input type= "text"
                onChange={(e) => setlname(e.target.value)}
                value={last_name}      className=" text-orange-700 bg-white bg-opacity-20 rounded-full border-2 border-transparent focus:border-white focus:border-opacity-50 focus:outline-none px-3 py-1 leading-none text-sm transition-colors placeholder-white placeholder-opacity-50 m-2"   />

            <label>Adress</label>
            <input type= "text"
                onChange={(e) => setAdress(e.target.value)}
                value={Adress}  className=" text-orange-700 bg-white bg-opacity-20 rounded-full border-2 border-transparent focus:border-white focus:border-opacity-50 focus:outline-none px-3 py-1 leading-none text-sm transition-colors placeholder-white placeholder-opacity-50 m-2"  />

            <label>PLZ</label>
            <input type= "text"
                onChange={(e) => setPLZ(e.target.value)}
                value={PLZ}  className=" text-orange-700 bg-white bg-opacity-20 rounded-full border-2 border-transparent focus:border-white focus:border-opacity-50 focus:outline-none px-3 py-1 leading-none text-sm transition-colors placeholder-white placeholder-opacity-50 m-2"  />

                <div>    
                <label> Mail
                <input
                    type="radio"
                    name="radio-group"
                    value="Yes"
                    onClick={(e) => {setMail(e.target.value); console.log(e.target.value)}}
                  // 
                  className=" text-white bg-white bg-opacity-20 rounded-full border-2 border-transparent focus:border-white focus:border-opacity-50 focus:outline-none px-3 py-1 leading-none text-sm transition-colors placeholder-white placeholder-opacity-50 m-2"/>
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
            </div>
            <button  class="mr-4 inline-block px-6 py-2 border-2 border-white-500 text-white-500 font-medium text-xs leading-tight uppercase rounded-full hover:bg-pink-600 hover:bg-opacity-[45%] focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Sign Up</button>
        </form> : <NavLink to={{
                pathname: `/${user._id}`
        }}  >To your Account</NavLink> }
        
        <div>{user.first_name}</div>
    </div>

)
} 

export default SignUp 