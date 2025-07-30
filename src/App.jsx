
import './App.css'
import NavBar from "./components/NavBar.jsx";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Wanderer from "./components/Wanderer.jsx";
import Touren from "./components/Touren.jsx";
import Gruppen from "./components/Gruppen.jsx";

function App() {

  return (
    <>
        <NavBar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About/>} />
            <Route path="/wanderer" element={<Wanderer />} />
            <Route path="/touren" element={<Touren />} />
            <Route path="/gruppen" element={<Gruppen />} />


        </Routes>
    </>
  )
}

export default App
