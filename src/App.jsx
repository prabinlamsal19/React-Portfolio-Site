import Topbar from "./components/portfolio_site/topbar/Topbar";
import Contact from "./components/portfolio_site/contacts/Contact";
import Intro from "./components/portfolio_site/intro/Intro";
import Portfolio from "./components/portfolio_site/portfolio/Portfolio";
import Testimonials from "./components/portfolio_site/testimonials/Testimonials";
import Works from "./components/portfolio_site/works/Works"
import { useState } from "react";

import { Component } from 'react';

import "./app.scss"
import Menu from "./components/portfolio_site/menu/Menu";

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
