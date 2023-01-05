import { Link, NavLink, useNavigate } from "react-router-dom";
//

const Navbar = () => {
	const navigate = useNavigate();
	//remember to add active class to navbar in css

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
					<Link to='/account'>
						<li>Account</li>
					</Link>
					<NavLink to='/account/create_book'>
						<li>Add Book</li>
					</NavLink>
					<Link to='/account/user_collection'>
						<li>My Books</li>
					</Link>
                <Link to="/signup"><li>
                    Signup    
                </li></Link>
				</ul>
                <button onClick={()=>navigate(-1)} >Back</button>
			</div>
		</header>
	);
};

export default Navbar;
