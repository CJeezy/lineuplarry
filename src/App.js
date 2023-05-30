import React, {useState} from 'react'
import LandingPage from './pages/js/LandingPage';
import './App.css';


function App() {
  const [selectedAgent,setSelectedAgent] = useState(undefined)
  const [selectedMap,setSelectedMap] = useState(undefined)
  const [selectedSide,setSelectedSide] = useState(undefined)
  return (
    <>
    <div className="App">
        <LandingPage selectedAgent={selectedAgent} setSelectedAgent={setSelectedAgent} selectedMap={selectedMap} setSelectedMap={setSelectedMap} selectedSide={selectedSide} setSelectedSide={setSelectedSide}></LandingPage>
    </div>
   </>
   
  );
}

export default App;