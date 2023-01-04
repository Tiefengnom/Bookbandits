import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages & components
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import AddBook from "./components/AddBook";
import MyBooks from "./components/MyBooks";
import AccountLanding from "./pages/AccountLanding";

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Navbar />

				<div className='pages'>
					<Routes>
						<Route index element={<Home />} />

						<Route path='account' element={<AccountLanding />}>

							<Route path='create_book' element={<AddBook />} />

							<Route path='user_collection' element={<MyBooks />} />

						</Route>
					</Routes>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
