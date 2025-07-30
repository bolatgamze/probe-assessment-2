
import './App.css'
import NavBar from "./components/NavBar.jsx";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Wanderer from "./components/Wanderer.jsx";
import Touren from "./components/Touren.jsx";
import Gruppen from "./components/Gruppen.jsx";
import {useState} from "react";

function App() {
    const [wandererList, setWandererList] = useState([
        {
            id: 1,
            name: 'Gandalf',
            surname: 'Grauer',
            phone: '',
            address: ''
        },
        {
            id: 2,
            name: 'Loki',
            surname: '',
            phone: '123456789',
            address: 'Asgard'
        }
    ]);

  return (
    <>
        <NavBar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About/>} />
            <Route path="/wanderer" element={<Wanderer
            wandererList={wandererList} setWandererList={setWandererList} />} />
            <Route path="/touren" element={<Touren />} />
            <Route path="/gruppen" element={<Gruppen
            wandererList={wandererList}/>} />


        </Routes>
    </>
  )
}

export default App
