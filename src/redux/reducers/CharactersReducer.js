import { charactersTypes } from "../actions/ActionsTypes"

const defaultState = {
    characters: []
}

export const CharactersReducer = (state = defaultState, action) => {
    switch (action.type) {
        case charactersTypes.ADD_CHARACTER:
            return {...state, characters: [...state.characters, action.payload]};

        case charactersTypes.REMOVE_CHARACTER:
            return {...state, characters: state.characters.filter((character) => character.id !== action.payload)};

        default:
            return state;
    }
}