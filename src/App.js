import { Routes, Route } from "react-router-dom"
import React, {useState} from 'react'
import LandingPage from './pages/js/LandingPage';
import Lineups from './pages/js/Lineups';
import './App.css';


function App() {
  const [selectedAgent,setSelectedAgent] = useState(undefined)
  const [selectedMap,setSelectedMap] = useState(undefined)
  const [selectedSide,setSelectedSide] = useState(undefined)
  return (
    <>
    <div className="App">
        <LandingPage selectedAgent={selectedAgent} setSelectedAgent={setSelectedAgent} selectedMap={selectedMap} setSelectedMap={setSelectedMap} selectedSide={selectedSide} setSelectedSide={setSelectedSide}></LandingPage>
        <Routes>
        <Route path="lineup" element={ <Lineups/> } />
      </Routes>
    </div>
   </>
   
  );
}

export default App;