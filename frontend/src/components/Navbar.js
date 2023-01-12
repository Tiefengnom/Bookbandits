import React, {useState} from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useUserContext } from "../hooks/useUserContext"
import logo from "../assets/logo-orange.png"
import cross from "../assets/cross.png"
import menu from "../assets/hamburger.png"


const Navbar = () => {
	const navigate = useNavigate();
	//remember to add active class to navbar in css
	const {user} = useUserContext()
	let [visibility,setMenuVisibility]=useState(false);

	return (
		<header className="header">
			<div className='container flex w-full fixed top-0 left-0 right-0 bg-white z-[99]'>
				<Link to='/'>
					<div className="flex justify-center align-center">
					<img className="w-12" src={logo} alt='reading racoon'/>
					<h1 className="m-[5px]  text-gray-400">BookBandits</h1>
					</div>
				</Link>
				<div onClick={()=>setMenuVisibility(!visibility)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
				
      <div > <img className="w-6 mt-[-5px]" src={visibility ? cross : menu} alt='icon'/></div>
      </div>
				<ul className={`md:flex md:items-center md:pb-0 pb-1 absolute md:static bg-white md:z-auto left-0 w-full md:w-auto md:pl-0 transition-all duration-500 ease-in ${visibility ? 'top-12 ':'top-[-490px]'}`} >
					<NavLink to="/" end>
						<li className="text-center mx-auto px-4 text-gray-400 border-b-2 border-transparent hover:border-pink-500 w-fit">Home</li>
					</NavLink>
                    <NavLink to='/catalogue' end>
						<li className="text-center mx-auto px-4 w-fit text-gray-400 border-b-2 border-transparent hover:border-pink-500">Catalogue</li>
					</NavLink>
					{/* <Link to={`/${user._id}`} >
						<li className="text-center mx-auto px-4 w-fit text-gray-400 border-b-2 border-transparent hover:border-pink-500">Account</li>
					</Link> */}
					{!user ? <li></li> :	<NavLink to={{
									pathname: `/${user._id}`
 									}}  ><li className="text-center mx-auto px-4 w-fit text-gray-400 border-b-2 border-transparent hover:border-pink-500">Account</li></NavLink>}
					{!user ? <li></li> :	<NavLink to={{
									pathname: `/${user._id}/create_book`
 									}}  ><li className="text-center mx-auto px-4 w-fit text-gray-400 border-b-2 border-transparent hover:border-pink-500">Add Book</li></NavLink>}
					{!user ? <li></li> : <NavLink to={{
									pathname: `/${user._id}/user_collection`
 									}}  ><li className="text-center mx-auto px-4 w-fit text-gray-400 border-b-2 border-transparent hover:border-pink-500">My Books</li></NavLink> }
                {user ? <Link to="/logout"><li className="text-center mx-auto px-4 w-fit text-gray-400 border-b-2 border-transparent hover:border-pink-500">
                    Logout   
                </li ></Link>
				:
				<Link to="/login"><li className="text-center mx-auto px-4 w-fit text-gray-400 border-b-2 border-transparent hover:border-pink-500">
                    Login    
                </li ></Link>}
				{user ? <li></li>:<Link to="/signup"><li className="text-center mx-auto px-4 w-fit text-gray-400 border-b-2 border-transparent hover:border-pink-500">
                    Sign Up 
                </li ></Link>}
				</ul>
                <button onClick={()=>navigate(-1)} className="text-center text-gray-400 group-hover:text-pink-500 border-b-2 border-transparent hover:border-pink-500 hidden md-flex">Back</button>
			</div>
		</header>
	);
};

export default Navbar;

//<NavLink to={{
//	pathname: `/${userID}/create_book`
 //}}  >Add Book</NavLink>