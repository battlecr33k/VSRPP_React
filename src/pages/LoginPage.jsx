import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { AuthContext } from "../context";
import { users } from "../data/users";
import { setCurrentUserAction } from "../redux/actions/LoginActions";

const LoginPage = () => {

    const dispatch = useDispatch();

    const [authorizationData, setAuthorizationData] = useState({login: "", password: ""});
    const {setIsAuth} = useContext(AuthContext);

    const onLoginSubmit = (event) => {
        event.preventDefault();

        if (users.find(user => user.login === authorizationData.login && user.password === authorizationData.password)) {
            setIsAuth(true);
            dispatch(setCurrentUserAction(authorizationData))
        }
        else {
            alert("Invalid login or password!");
        }
        
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setAuthorizationData({...authorizationData, [name]: value});
    }

    return (
        <div className="wrapper">
            <form className="formContent" onSubmit={onLoginSubmit}>
                <h1>Welcome</h1>
                <h3>Login to get started!</h3>
                <input className="loginInput"
                    type="text" 
                    placeholder="Login" 
                    name="login" 
                    id="login"
                    required
                    value={authorizationData.login} 
                    onChange={handleChange} 
                />

                <input className="loginInput"
                    type="password" 
                    placeholder="Password" 
                    name="password" 
                    id="password"
                    required
                    value={authorizationData.password} 
                    onChange={handleChange} 
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default LoginPage;