import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../components/about";
import Contact from "../components/contact";
import Portfolio from "../components/portfolio";
import Hero from "../components/Hero";
import Services from "../components/services";
import Skills from "../components/skills";
import Resume from "../components/resume";

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Hero/>}/>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/services" element={<Services />} />
            <Route path="/hero" element={<Hero />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/resume" element={<Resume />} />
        </Routes>
    );
};

export default MainRoutes;
