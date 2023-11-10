
import { Navigate, Route, Routes, BrowserRouter } from "react-router-dom"
import { Navbar } from "../../ui"

import { DcPage, HeroPage, MarvelPage, SearchPage } from '../pages'
import Sidebar from '../components/Sidebar';
import { Home } from '../components/Home';


export const HeroesRouter = () => {
    return (
        <div>

        <Navbar /> 

        <Sidebar>


            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="*" element={<Home />} />
            </Routes>
          
        </Sidebar>

        </div>

    );

}