import Topbar from "./components/topbar/Topbar";
import Contact from "./components/contacts/Contact";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Works from "./components/works/Works"
import { useState } from "react";

import { Component } from 'react';

import "./app.scss"
import Menu from "./components/menu/Menu";

function App() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <div className="sections">
        <Intro />
        <Works />
        <Portfolio />
        <Testimonials />
        <Contact />
      </div>

    </div>
  );
}

export default App;
