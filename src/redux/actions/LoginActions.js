import { loginTypes } from "./ActionsTypes";

export const setCurrentUserAction = (payload) => ({type: loginTypes.SET_CURRENT_USER, payload});