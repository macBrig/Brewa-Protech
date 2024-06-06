import React from "react";
import Login from "./Login";
import Home from "./Home";
import Landlord from "./Landlord";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" Component={Login} />
        <Route path="/landlord" Component={Landlord} />
        <Route path="/" Component={Home} />
      </Routes>
    </Router>
  );
};

export default App;
