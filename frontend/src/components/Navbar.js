import { Link} from "react-router-dom"
//

const Navbar = () => {

  return (
   <header>
    <div className = "container">
        <Link to= "/">
            <h1>BookBandits</h1>
            
        </Link>
        <ul>
                <Link to="/account/create_book"><li>
                    Add Book
                </li></Link>
                <Link to="/account/user_collection"><li>
                    My Books
                </li></Link>
            </ul>
    </div>
</header>
)
} 

export default Navbar 