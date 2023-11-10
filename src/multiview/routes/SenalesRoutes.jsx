
import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';

import Home from './pages/Home.jsx';
import Telemax from './pages/Telemax';
import Canal26 from './pages/Canal26';
import Latinatv from './pages/Latinatv';
import Musictop from './pages/Musictop';
import Tierramia from './pages/Tierramia';
import Tlcpreview from './pages/Tlcpreview';
import Cuatrok from './pages/Cuatrok.jsx';

const SenalesRoutes = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/canal26" element={<Canal26 />} />
          <Route path="/latinatv" element={<Latinatv />} />
          <Route path="/telemax" element={<Telemax />} />
          <Route path="/musictop" element={<Musictop />} />
          <Route path="/tierramia" element={<Tierramia />} />
          <Route path="/tlcpreview" element={<Tlcpreview />} />
          <Route path="/cuatrok" element={<Cuatrok />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default SenalesRoutes;


import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui"
import { DcPage, HeroPage, MarvelPage, SearchPage } from '../pages'



export const HeroesRouter = () => {
    return (
        <div>
            <Navbar/>

            <div className="container">

                <Routes>
                    <Route path="marvel" element={<MarvelPage/>} />
                    <Route path="dc" element={<DcPage/>} />
                    <Route path="search" element={<SearchPage />} />
                    <Route path="hero" element={<HeroPage/>} />

                    <Route path="/" element={<Navigate to="/marvel" />} />
                </Routes>


            </div>
        </div>
    )
}