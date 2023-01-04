import {
	BrowserRouter,
	Routes,
	Route,
} from "react-router-dom";

//pages & components
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import AddBook from "./components/AddBook";
import SignUp from "./components/SignUp";

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Navbar />

				<div className='pages'>
					<Routes>
						<Route
							path='/'
							element={<Home />}
						/>
						<Route
							path='/addbook'
							element={<AddBook />}
						/>
						<Route
							path="/signup"
							element={<SignUp />}
						/>
					</Routes>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
