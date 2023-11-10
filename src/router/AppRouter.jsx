
import { Route, Routes } from 'react-router-dom';
import { Navbar } from '../ui';


import { HeroesRouter } from '../heroes';
import { LoginPage } from '../auth/pages/LoginPage';


import { PrivateRoute } from './PrivateRoute';


export const AppRouter = () => {
    return (
        <>


            <Routes>

                <Route path="login" element={<LoginPage/>} />

                <Route path="*" element={
                 <PrivateRoute>

                        <HeroesRouter />

                    </PrivateRoute>

                } />
            

            </Routes>

        </>
    )
}