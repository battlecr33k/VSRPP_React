import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from '../components/Form';
import Table from '../components/Table';
import { addCharacterAction, removeCharacterAction } from '../redux/actions/CharactersActions';


function CharactersPage() {
    const dispatch = useDispatch();

    const characters = useSelector(state => state.characters.characters);
    const currentUser = useSelector(state => state.login.currentUser);

    const removeCharacter = (id) => {
        dispatch(removeCharacterAction(id));
    }

    const handleSubmit = (character) => {
        dispatch(addCharacterAction(character));
    }

    return (
        <div className="container">
            <h3>Hello, {currentUser.login}</h3>
            <Form handleSubmit={handleSubmit} />
            
            <Table
                characterData={characters}
                removeCharacter={removeCharacter}
            />
                
        </div>
    );
}

export default CharactersPage;