import React from 'react';
import ReactDOM from "react-dom/client";
import App from './App';
import Lineups from './pages/js/Lineups';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<Router>
    <Routes>
      <Route exact path="/" element={<App/>} />
      <Route exact path="/lineup" element={<Lineups/>} />
      </Routes>
    </Router>
    );