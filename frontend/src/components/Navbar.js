import { Link } from "react-router-dom";
//

const Navbar = () => {
	return (
		<header>
			<div className='container'>
				<Link to='/'>
					<h1>BookBandits</h1>
				</Link>
				<ul>
					<Link to='/:userid/addbook'>
						<li>Add Book</li>
					</Link>
				</ul>
			</div>
		</header>
	);
};

export default Navbar;
