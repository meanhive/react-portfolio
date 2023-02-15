import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from "./component/About";
import Contact from "./component/Contact";
import Home from "./component/Home";
import Menu from "./component/Menu";
import Pnf from "./component/Pnf";
import Projects from "./component/Projects";
import Resume from "./component/Resume";

function App(props) {
  return (
    <BrowserRouter>
          <Menu/>

          <Routes>
                <Route path={`/`} element={<Home/>} />
                <Route path={`/about`} element={<About/>} />
                <Route path={`/resume`} element={<Resume/>} />
                <Route path={`/projects`} element={<Projects/>} />
                <Route path={`/contact`} element={<Contact/>} />
                <Route path={`/*`} element={<Pnf/>} />
          </Routes>
    </BrowserRouter>
  )
}

export default App