import { loginTypes } from "../actions/ActionsTypes";

const defaultState = {
    currentUser: {login: "", password: ""}
}

export const LoginReducer = (state = defaultState, action) => {
    switch (action.type) {
        case loginTypes.SET_CURRENT_USER:
            return {...state, currentUser: action.payload};

        default:
            return state;
    }
}