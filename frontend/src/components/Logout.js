import { useUserContext } from "../hooks/useUserContext";

function Logout () {
const {user, setUser} = useUserContext()



return (
<div className="login w-full h-screen bg-gradient-to-br from-yellow-500 to-pink-600 pt-12 pb-12 px-4 mt-6 text-black">

{!user ? <div>You are sucessfullly logged out</div>:<button onClick={ (e) => setUser("")} > Want to log out?</button>}



</div>





)

}


export default Logout