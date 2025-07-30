
import './App.css'
import NavBar from "./components/NavBar.jsx";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Wanderer from "./components/Wanderer.jsx";
import Touren from "./components/Touren.jsx";
import Gruppen from "./components/Gruppen.jsx";
import {useState} from "react";
import eifel from '../Eifelsteig.png';
import rhein from '../rheinburgenweg.png';
import stausee from '../stausee.png';


function App() {
    const [wandererList, setWandererList] = useState([
        {
            id: 1,
            name: 'Gandalf',
            surname: 'der Grauer',
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
    const [gruppen, setGruppen] = useState([
        {
            id: 1,
            name: "Familie",
            members: [1,2],
            tourId: null
        },
        {
            id: 2,
            name: "Freunde",
            members: [],
            tourId: null
        }

    ]);
    const [touren, setTouren] = useState([
        {
            id: 1,
            name: 'Eifelstieg',
            schwierigkeitsgrad: 'mittel',
            maxTeilnehmer: 10,
            image: eifel,
        },
        {
            id: 2,
            name: 'Rheinburgenweg',
            schwierigkeitsgrad: 'leicht',
            maxTeilnehmer: 8,
            image: rhein,
        },
        {
            id: 3,
            name: 'Stausee',
            schwierigkeitsgrad: 'schwer',
            maxTeilnehmer: 5,
            image: stausee,
        }
    ]);


    return (
    <>
        <NavBar />
        <Routes>
            <Route path="/probe-assessment-2/" element={<Home />} />
            <Route path="/probe-assessment-2/about" element={<About/>} />
            <Route path="/probe-assessment-2/wanderer" element={<Wanderer
            wandererList={wandererList}
            setWandererList={setWandererList}
            gruppen={gruppen}
            setGruppen={setGruppen}
            touren={touren}/>} />
            <Route path="/probe-assessment-2/touren" element={<Touren
            touren={touren}
            setTouren={setTouren}/>} />
            <Route path="/probe-assessment-2/gruppen" element={<Gruppen
            wandererList={wandererList}
            gruppen={gruppen}
            setGruppen={setGruppen}
            touren={touren}/>} />


        </Routes>
    </>
  )
}

export default App
