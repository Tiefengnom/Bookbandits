import { useUserContext } from "../hooks/useUserContext";
import { useNavigate } from "react-router";


function Logout () {
const {user, setUser} = useUserContext()
const navigate = useNavigate();


return (
<div className="login w-full h-screen  pt-12 pb-12 px-4 mt-6 text-black">

{!user ? <div>You are sucessfullly logged out</div>: <><p>Do you want to log out?</p><button onClick={ (e) => setUser("")} className=' bg-white bg-opacity-60 px-6 py-2 w-fit font-medium text-xs leading-tight  rounded-full hover:bg-pink-600 hover:bg-opacity-[45%] focus:outline-none focus:ring-0 transition duration-150 ease-in-out cursor:pointer m-2'> Yes </button>  <button
                    onClick={() => navigate(`/${user._id}/user_collection`)}
                    className=' bg-white bg-opacity-90 px-6 py-2 border-2 border-white-500  font-medium text-xs leading-tight  rounded-full hover:bg-pink-600 hover:bg-opacity-[45%] focus:outline-none focus:ring-0 transition duration-150 ease-in-out cursor:pointer m-2'>
                    Back to my profile
                </button></> }



</div>





)

}


export default Logout