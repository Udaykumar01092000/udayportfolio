import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar";
import Hero from '../src/components/Hero'
import About from "./components/about";
import Skills from "./components/skills";

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Hero/>
            <About/>
            <Skills/>
        </BrowserRouter>
    );
};

export default App;
