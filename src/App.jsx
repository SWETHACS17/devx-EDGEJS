import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profilelog from "./Auth/Profilelog";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profilelog" element={<Profilelog />} />
      </Routes>
    </Router>
  );
}

export default App;
