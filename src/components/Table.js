import React from 'react';

const TableHeader = () => { 
    return (
        <thead>
            <tr>
                <th>Id</th>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Email</th>
                <th>Action</th>
            </tr>
        </thead>
    );
}

const TableBody = props => { 
    const characters = props.characterData.map((character) => {
        return (
            <tr key={character.id}>
                <td>{character.id}</td>
                <td>{character.firstname}</td>
                <td>{character.lastname}</td>
                <td>{character.email}</td>
                <td><button onClick={() => props.removeCharacter(character.id)}>Delete</button></td>
            </tr>
        );
    });

    return <tbody>{characters}</tbody>;
}

const Table = (props) => {
    const { characterData, removeCharacter } = props;
        return (
            <div>
                <h3>Users</h3>
                <table>
                    <TableHeader />
                    <TableBody characterData={characterData} removeCharacter={removeCharacter} />
                </table>
            </div>
        );
}

export default Table;