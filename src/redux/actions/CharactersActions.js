import { charactersTypes } from "./ActionsTypes";


export const addCharacterAction = (payload) => ({type: charactersTypes.ADD_CHARACTER, payload});
export const removeCharacterAction = (payload) => ({type: charactersTypes.REMOVE_CHARACTER, payload});