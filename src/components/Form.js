import React, { useState } from "react";

const Form = (props) => {

    const [character, setCharacter] = useState({id: 0, firstName: "", lastName: "", email: ""});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCharacter({...character, [name]: value})
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        
        props.handleSubmit(character);
        setCharacter({id: character.id + 1, firstName: "", lastName: "", email: ""});
    }


    return (
        <form onSubmit={onFormSubmit}>
            <div className='forma'>
                <button type="submit">
                    Add User
                </button>

                <div className='labelinput'>
                    <label for="firstname">FirstName</label>
                    <input 
                        type="text" 
                        name="firstname" 
                        id="firstname"
                        required
                        value={character.firstname} 
                        onChange={handleChange} />
                </div>

                <div className='labelinput'>
                    <label for="lastname">LastName</label>
                    <input 
                        type="text" 
                        name="lastname" 
                        id="lastname"
                        required
                        value={character.lastname} 
                        onChange={handleChange} />
                </div>

                <div className='labelinput'>    
                    <label for="email">Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email"
                        required
                        value={character.email} 
                        onChange={handleChange} />
                </div>
            </div>
        </form>
    );
}

export default Form;
