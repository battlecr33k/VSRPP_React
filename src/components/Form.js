import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        
        this.initialState = {
            id: 0,
            firstname: '',
            lastname: '',
            email: ''
        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name] : value
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        
        this.initialState.id++;
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { id, firstname, lastname, email } = this.state; 

        return (
            <form onSubmit={this.onFormSubmit}>
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
                            value={firstname} 
                            onChange={this.handleChange} />
                    </div>

                    <div className='labelinput'>
                        <label for="lastname">LastName</label>
                        <input 
                            type="text" 
                            name="lastname" 
                            id="lastname"
                            required
                            value={lastname} 
                            onChange={this.handleChange} />
                    </div>

                    <div className='labelinput'>    
                        <label for="email">Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            id="email"
                            required
                            value={email} 
                            onChange={this.handleChange} />
                    </div>
                </div>
            </form>
        );
    }
}

export default Form;
