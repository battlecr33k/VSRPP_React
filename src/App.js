import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import { AuthContext } from './context';
import { store } from './redux/store';

function App() {
    const [isAuth, setIsAuth] = useState(false);

    return (
        <Provider store={store}>
            <AuthContext.Provider value={{
                isAuth,
                setIsAuth
            }}>
                <BrowserRouter>
                    <AppRouter/>
                    <Toaster/>
                </BrowserRouter>
            </AuthContext.Provider>
        </Provider>
        );
}

export default App;