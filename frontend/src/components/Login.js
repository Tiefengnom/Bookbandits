import { useState } from "react";

import { useUserContext } from "../hooks/useUserContext";
import { BorrowContext } from "../context/Borrowcontext";
import AccountLanding from "../pages/AccountLanding";
import { useUBContext } from "../hooks/useUBContext";

const Login = () => {
    const [first_name, setfname] = useState("");
    const [last_name, setlname] = useState("");
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [error, setError] = useState(null);
    const { user, setUser } = useUserContext();
    const {bBooks, setbBooks} = useUBContext()
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("submit");

        const userdata = { email,password};

        const response = await fetch("http://localhost:4000/bookbandits/Login", {
            method: "POST",
            body: JSON.stringify(userdata),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const json = await response.json();
        console.log("json user", json);

        const id = json.user._id;
        setUser(json.user);
        /*if (!json.bbooks === []) {setbBooks((prev) => [...prev  , ...json.bbooks]) }*/

        if (response.ok) {
            setfname("");
            setlname("");
            setPassword("")
            setError(null);
          
           
           
            console.log(json._id)
            console.log("Welcome, youre signed in");
        } else {
            setError(json.error);
            console.log(error)
        }
    };

    return (
         <div className='login w-full h-screen  pt-12 pb-12 px-4 mt-6 '>
            {user._id ? user._id && <AccountLanding /> : <form className='signin' onSubmit={handleSubmit}>
                <label>email</label>
                <input type='text' onChange={(e) => setEmail(e.target.value)} value={email} />
                <div className="text-left flex flex-col">
                <label>First Name</label>
                <input type='text' onChange={(e) => setfname(e.target.value)} value={first_name} className="  bg-white bg-opacity-90 rounded-full border-2 border-transparent focus:border-white focus:border-opacity-50 focus:outline-none px-3 py-1 leading-none text-sm  transition-colors placeholder-white placeholder-opacity-50 my-2"/>

                <label>Last Name</label>
                <input type='text' onChange={(e) => setlname(e.target.value)} value={last_name} className="  bg-white bg-opacity-90 rounded-full border-2 border-transparent focus:border-white focus:border-opacity-50 focus:outline-none px-3 py-1 leading-none text-sm  transition-colors placeholder-white placeholder-opacity-50 my-2"/>

                <label>Password</label>
                <input type='password' onChange={(e) => setPassword(e.target.value)} value={password} className="  bg-white bg-opacity-90 rounded-full border-2 border-transparent focus:border-white focus:border-opacity-50 focus:outline-none px-3 py-1 leading-none text-sm  transition-colors placeholder-white placeholder-opacity-50 my-2"/> </div>
                <div className="flex justify-center pt-2">
                <button type='submit' className=' bg-white bg-opacity-90 px-6 py-2 w-fit font-medium text-xs leading-tight  rounded-full hover:bg-pink-600 hover:bg-opacity-[45%] focus:outline-none focus:ring-0 transition duration-150 ease-in-out cursor:pointer my-2' >Log In</button> </div> 

            </form>}
          
        </div>
    );
};

export default Login;
