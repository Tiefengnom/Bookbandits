
import {BrowserRouter, Routes, Route} from "react-router-dom"
import AddBook from "./components/AddBook";

//pages & components
import Home from "./pages/Home"
import Navbar from "./components/Navbar"


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar />
      <div className="pages">
        <Routes>
          <Route
            path="/"
            element={<Home />}
            />
            <Route
							path='/:userid/addbook'
							element={<AddBook />}
						/>
        </Routes>
      </div>
     </BrowserRouter>
    </div>
  );
}

export default App;
