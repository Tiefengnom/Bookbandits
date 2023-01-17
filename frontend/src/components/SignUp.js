import { useState } from "react"
import { useNavigate} from "react-router-dom"
import { useUserContext } from "../hooks/useUserContext"
import { useUBContext } from "../hooks/useUBContext";
import AccountLanding from "../pages/AccountLanding";
//


	

const SignUp = () => {
    const[first_name, setfname] = useState("")
    const[last_name, setlname] = useState("")
    const[Adress, setAdress] = useState("")
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")
    const[PLZ, setPLZ] = useState("")
    const[mail, setMail]= useState(null)
    const[userid, setUserid] = useState("")
    const [error, setError] = useState(null)
    const navigate = useNavigate();
    const {user, setUser} = useUserContext()
    const {bBooks, setbBooks} = useUBContext()
    
    

    const handleSubmit= async (e) => {
        e.preventDefault()
        

        const userdata = {first_name,last_name,email,Adress,PLZ,mail,password}

        const response = await fetch("http://localhost:4000/bookbandits/signup" , {
            method: "POST" ,
            body: JSON.stringify(userdata),
            headers: {
                "Content-Type" : "application/json"
            }
        })
        const json = await response.json()
        setUser(json.user)
        /*if (!json.bbooks === []) {setbBooks((prev) => [...prev  , ...json.bbooks]) }*/

        if (!response.ok) {
            setError(json.error)
     }
     if (response.ok) {
        setfname("")
        setlname("")
        setAdress("")
        setPLZ("")
        setError(null)
        
        
        console.log("Welcome, you are signed in")
     }
    }

  return (
   
    
    <div className = "Signin mt-20 h-full text-left" >
        {!user ? <form className="signin" onSubmit={handleSubmit}>
            <label>First Name</label>
            <input type= "text"
                onChange={(e) => setfname(e.target.value)}
                value={first_name}   className=" bg-white bg-opacity-90 rounded-full border-2 border-transparent focus:border-white focus:border-opacity-50 focus:outline-none px-3 py-1 leading-none text-sm  transition-colors placeholder-white placeholder-opacity-50 my-2" />

           
            <label>Last Name</label>
            <input type= "text"
                onChange={(e) => setlname(e.target.value)}
                value={last_name}      className=" bg-white bg-opacity-90 rounded-full border-2 border-transparent focus:border-white focus:border-opacity-50 focus:outline-none px-3 py-1 leading-none text-sm transition-colors placeholder-white placeholder-opacity-50 my-2"   />

            <label>Email</label>
            <input type= "text"
                onChange={(e) => setEmail(e.target.value)}
                value={email}  className=" text-orange-700 bg-white bg-opacity-20 rounded-full border-2 border-transparent focus:border-white focus:border-opacity-50 focus:outline-none px-3 py-1 leading-none text-sm transition-colors placeholder-white placeholder-opacity-50 m-2"  />



            <label>Address</label>
            <input type= "text"
                onChange={(e) => setAdress(e.target.value)}
                value={Adress}  className=" bg-white bg-opacity-90 rounded-full border-2 border-transparent focus:border-white focus:border-opacity-50 focus:outline-none px-3 py-1 leading-none text-sm transition-colors placeholder-white placeholder-opacity-50 my-2"  />

            <label>Postal Code</label>
            <input type= "text"
                onChange={(e) => setPLZ(e.target.value)}
                value={PLZ}  className="  bg-white bg-opacity-90 rounded-full border-2 border-transparent focus:border-white focus:border-opacity-50 focus:outline-none px-3 py-1 leading-none text-sm transition-colors placeholder-white placeholder-opacity-50 my-2"  />

            <label>Password</label>
            <input type= "Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}  className=" bg-white bg-opacity-90 rounded-full border-2 border-transparent focus:border-white focus:border-opacity-50 focus:outline-none px-3 py-1 leading-none text-sm transition-colors placeholder-white placeholder-opacity-50 my-2"  />


           
                <div>    
                <label> Are you willing to send your books via mail?
                <input 
                    type="radio"
                    name="radio-group"
                    value="Yes"
                    onClick={(e) => {setMail(e.target.value); console.log(e.target.value)}}
                  // 
                  className=" bg-white bg-opacity-20 rounded-full border-2 border-transparent focus:border-white focus:border-opacity-50 focus:outline-none px-3 py-1 leading-none text-sm transition-colors placeholder-white placeholder-opacity-50 m-2"/>
                    <span >Yes</span>
            </label>   
            <label>
                <input
                type="radio"
                name="radio-group"
                value="No"
                defaultChecked
                
                onClick={(e) => setMail(e.target.value)}
                className="m-2"/>
                <span>No</span>
            </label>
            </div>
            <div className="flex justify-center pt-2">
                <button type='submit' className=' bg-white bg-opacity-90 px-6 py-2 w-fit font-medium text-xs leading-tight  rounded-full hover:bg-pink-600 hover:bg-opacity-[45%] focus:outline-none focus:ring-0 transition duration-150 ease-in-out cursor:pointer m-2' >Sign up</button> </div>
        </form> :<>
<p>Welcome to the BookBandits family! You have successfully signed up.</p>
        <AccountLanding/>
        </>}
        
      
    </div>

)
} 

export default SignUp 