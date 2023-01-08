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
				<ul className='navbar-list'>
					<NavLink to='/' end>
						<li>Home</li>
					</NavLink>
                    <NavLink to='/catalogue' end>
						<li>Catalogue</li>
					</NavLink>
					<Link to={`/${user._id}`} >
						<li>Account</li>
					</Link>
					{!user ? <li>Please log in</li> :	<NavLink to={{
									pathname: `/${user._id}/create_book`
 									}}  ><li>Add Book</li></NavLink>}
					{!user ? <li>Please log in</li> : <NavLink to={{
									pathname: `/${user._id}/user_collection`
 									}}  ><li>My Books</li></NavLink> }
                <Link to="/login"><li>
                    Login    
                </li></Link>
				<Link to="/signup"><li>
                    SignUp 
                </li></Link>
				</ul>
                <button onClick={()=>navigate(-1)} >Back</button>
			</div>
		</header>
	);
};

export default Navbar;

//<NavLink to={{
//	pathname: `/${userID}/create_book`
 //}}  >Add Book</NavLink>