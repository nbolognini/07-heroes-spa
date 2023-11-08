import { Route, Routes } from 'react-router-dom';

import { HeroesRouter } from '../heroes';
import { LoginPage } from '../auth/pages/LoginPage';



export const AppRouter = () => {
    return (
        <>

        <Routes>
            <Route path="login" element={<LoginPage/>} />
            <Route path="/*" element={ <HeroesRouter/>} />
        </Routes>

        </>
    )
}