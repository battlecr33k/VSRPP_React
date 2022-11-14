import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import { AuthContext } from './context';

function App() {
    const [isAuth, setIsAuth] = useState(false);
    const [curUser, setCurUser] = useState({login: "", password: ""})

    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth,
            curUser,
            setCurUser
        }}>
            <BrowserRouter>
                <AppRouter/>
            </BrowserRouter>
        </AuthContext.Provider>
        );
}

export default App;