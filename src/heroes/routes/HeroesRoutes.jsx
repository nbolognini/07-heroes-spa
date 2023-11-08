import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui"
import { DcPage, HeroPage, MarvelPage, SearchPage } from "../pages"



export const HeroesRouter = () => {
    return (
        <div>
            <Navbar/>

            <div className="container">

                <Routes>
                    <Route path="marvel" element={<MarvelPage/>} />
                    <Route path="dc" element={<DcPage/>} />

                    <Route patch="search" element={<SearchPage />} />
                    <Route patch="hero" element={<HeroPage/>} />

                    <Route path="/" element={<Navigate to="/marvel" />} />
                </Routes>


            </div>
        </div>
    )
}