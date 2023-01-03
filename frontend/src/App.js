
import {BrowserRouter, Routes, Route} from "react-router-dom"

//pages & components
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import AddBook from "./components/AddBook";


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar />
     <AddBook />
      <div className="pages">
        <Routes>
          <Route
            path="/"
            element={<Home />}
            />
        </Routes>
      </div>
     </BrowserRouter>
    </div>
  );
}

export default App;
