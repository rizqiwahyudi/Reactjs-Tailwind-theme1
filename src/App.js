import { useEffect } from "react";
import React from "react";
import Navbar from "./components/admin/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Content from "./components/admin/Content";
import Login from "./components/admin/Login";
import Register from "./components/admin/Register";
import Crud from "./components/admin/Crud";
import LandingPage from "./components/landingPage/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar/>}>
          <Route path="/" element={<Content/>}/>
          <Route path="/crud" element={<Crud/>}/>
        </Route>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/landing-page" element={<LandingPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
