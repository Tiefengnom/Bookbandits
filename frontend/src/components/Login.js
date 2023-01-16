import { useState } from "react";

import { useUserContext } from "../hooks/useUserContext";
import { BorrowContext } from "../context/Borrowcontext";
import AccountLanding from "../pages/AccountLanding";
import { useUBContext } from "../hooks/useUBContext";

const Login = () => {
    const [first_name, setfname] = useState("");
    const [last_name, setlname] = useState("");
    const [password,setPassword] = useState("")
    const [error, setError] = useState(null);
    const { user, setUser } = useUserContext();
    const {bBooks, setbBooks} = useUBContext()
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("submit");

        const userdata = { first_name, last_name,password};

        const response = await fetch("http://localhost:4000/bookbandits/Login", {
            method: "POST",
            body: JSON.stringify(userdata),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const json = await response.json();
        console.log("json user", json);

        const id = json._id;
        setUser(json);
        if (!json.bbooks === []) {setbBooks((prev) => [...prev  , ...json.bbooks]) }

        if (response.ok) {
            setfname("");
            setlname("");
            setPassword("")
            setError(null);
          
            console.log(id);
            console.log(json.first_name);
            console.log(json._id)
            console.log("Welcome, youre signed in");
        } else {
            setError(json.error);
            console.log(error)
        }
    };

    return (
         <div className='login w-full h-screen bg-gradient-to-br from-yellow-500 to-pink-600 pt-12 pb-12 px-4 mt-6 text-black'>
            {user._id ? user._id && <AccountLanding /> : <form className='signin' onSubmit={handleSubmit}>
                <label>first_name</label>
                <input type='text' onChange={(e) => setfname(e.target.value)} value={first_name} />

                <label>last_name</label>
                <input type='text' onChange={(e) => setlname(e.target.value)} value={last_name} />

                <button type='submit'>Log In</button>

                <label>password</label>
                <input type='password' onChange={(e) => setPassword(e.target.value)} value={password} />


            </form>}
            {/* <NavLink
                to={{
                    pathname: `/${user._id}`,
                }}>
                Profile
            </NavLink>
            <div>{user._id}</div> */}
          
        </div>
    );
};

export default Login;
