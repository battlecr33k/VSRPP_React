import React, { useContext } from "react"
import { Route, Routes, Navigate } from "react-router-dom"
import { AuthContext } from "../context"
import CharactersPage from "../pages/CharactersPage"
import LoginPage from "../pages/LoginPage"

const AppRouter = () => {
    const {isAuth} = useContext(AuthContext);

    return (
        isAuth ?

        <Routes>
            <Route 
                path="/characters"
                element={<CharactersPage/>}
            />
            <Route
                path="*"
                element={<Navigate to="/characters" replace />}
            />
        </Routes>

        :

        <Routes>
            <Route 
                path="/login"
                element={<LoginPage/>}
            />
            <Route
                path="*"
                element={<Navigate to="/login" replace />}
            />
        </Routes>
    )
}

export default AppRouter;