import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from '../components/Form';
import Table from '../components/Table';
import { addCharacterAction, removeCharacterAction } from '../redux/actions/CharactersActions';
import toast from "react-hot-toast";


function CharactersPage() {
    const dispatch = useDispatch();

    const characters = useSelector(state => state.characters.characters);
    const currentUser = useSelector(state => state.login.currentUser);

    const removeCharacter = (id) => {
        toast.success('Character successfully removed!');
        dispatch(removeCharacterAction(id));
    }

    const handleSubmit = (character) => {
        toast.success('Character successfully added!');
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