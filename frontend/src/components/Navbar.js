import { Link, NavLink, useNavigate } from "react-router-dom";
import { useUserContext } from "../hooks/useUserContext"

//

const Navbar = () => {
	const navigate = useNavigate();
	//remember to add active class to navbar in css
	const {user, setUser} = useUserContext()

	return (
		<header>
			<div className='container'>
				<Link to='/'>
					<h1>BookBandits</h1>
				</Link>
				<ul className='navbar-list flex'>
					<NavLink to='/' end>
						<li className="text-center mx-auto px-4 w-full text-gray-400 group-hover:text-pink-500 border-b-2 border-transparent hover:border-pink-500">Home</li>
					</NavLink>
                    <NavLink to='/catalogue' end>
						<li className="text-center mx-auto px-4 w-full text-gray-400 group-hover:text-pink-500 border-b-2 border-transparent hover:border-pink-500">Catalogue</li>
					</NavLink>
					<Link to={`/${user._id}`} >
						<li className="text-center mx-auto px-4 w-full text-gray-400 group-hover:text-pink-500 border-b-2 border-transparent hover:border-pink-500">Account</li>
					</Link>
					{!user ? <li></li> :	<NavLink to={{
									pathname: `/${user._id}/create_book`
 									}}  ><li className="text-center mx-auto px-4 w-full text-gray-400 group-hover:text-pink-500 border-b-2 border-transparent hover:border-pink-500">Add Book</li></NavLink>}
					{!user ? <li></li> : <NavLink to={{
									pathname: `/${user._id}/user_collection`
 									}}  ><li className="text-center mx-auto px-4 w-full text-gray-400 group-hover:text-pink-500 border-b-2 border-transparent hover:border-pink-500">My Books</li></NavLink> }
                <Link to="/login"><li className="text-center mx-auto px-4 w-full text-gray-400 group-hover:text-pink-500 border-b-2 border-transparent hover:border-pink-500">
                    Login    
                </li ></Link>
				<Link to="/signup"><li className="text-center mx-auto px-4 w-full text-gray-400 group-hover:text-pink-500 border-b-2 border-transparent hover:border-pink-500">
                    SignUp 
                </li ></Link>
				</ul>
                <button onClick={()=>navigate(-1)} className="text-center text-gray-400 group-hover:text-pink-500 border-b-2 border-transparent hover:border-pink-500">Back</button>
			</div>
		</header>
	);
};

export default Navbar;

//<NavLink to={{
//	pathname: `/${userID}/create_book`
 //}}  >Add Book</NavLink>