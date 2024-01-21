import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/NavBar/NavBar";
import HeroPage from "./components/HeroPage/HeroPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroPage />
    </div>
  );
}

export default App;
