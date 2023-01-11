import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useUserContext } from "./hooks/useUserContext";

//pages & components
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import AddBook from "./components/AddBook";
import Login from "./components/Login";
import MyBooks from "./components/MyBooks";
import AccountLanding from "./pages/AccountLanding";
import Catalogue from "./pages/Catalogue";
import SingleBook from "./components/SingleBook";
import SignUp from "./components/SignUp";
import Logout from "./components/Logout";

function App() {
	
	//fetch the user id and x is user id
//user gibt name ein und wir machen find in db mit last name und first name



// useEffect(() => {
// 	const fetchBooks = async () => {
// 		const response = await fetch(`http://localhost:4000/bookbandits/${x}`)
// 		const json = await response.json()

// 		if (response.ok) {
// 			setBooks(json)
// 		}
// 	}


// 	fetchBooks()
// }, [])

	return (
		<div className='App'>
			<BrowserRouter>
				<Navbar />

				<div className='pages'>
					<Routes>
						<Route index element={<Home />} />

						<Route path='/:id' element={<AccountLanding />}>
							<Route path='create_book' element={<AddBook />} />
							
							<Route path='user_collection' element={<MyBooks />} />
						</Route>
						<Route path='catalogue/:id' element={<SingleBook />} />
						<Route path='catalogue' element={<Catalogue />}>
							
						</Route>
						<Route
							path="/logout"  element={<Logout />}
						/>
						<Route
							path="/login"		element={<Login />}
						/>
						<Route
							path="/signup" 		element={<SignUp />}
						/>
					</Routes>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
