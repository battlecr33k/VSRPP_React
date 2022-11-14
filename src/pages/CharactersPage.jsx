import React, { useContext, useState } from 'react';
import Form from '../components/Form';
import Table from '../components/Table';
import { AuthContext } from '../context';


function CharactersPage() {

    const [characters, setCharacters] = useState([]);
    const {curUser} = useContext(AuthContext);

    const removeCharacter = (id) => {
        setCharacters(characters.filter((character) => character.id !== id));
    }

    const handleSubmit = (character) => {
        setCharacters([...characters, character]);
    }

    return (
        <div className="container">
                
            <Form handleSubmit={handleSubmit} />
            
            <Table
                characterData={characters}
                removeCharacter={removeCharacter}
            />
                
        </div>
    );
}

export default CharactersPage;