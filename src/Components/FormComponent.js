import React, {Component} from 'react';

export default class FormComponent extends Component{
    state = {
        name: '',
        address: '',
        description: ''
    };

    handleNameChange = event => {
        event.preventDefault();
        this.setState({
            name: event.target.value
        })
    }
    handleAddressChange = event => {
        event.preventDefault();
        this.setState({
            address: event.target.value
        })
    }
    handleDescriptionChange = event =>{
        event.preventDefault();
        this.setState({
            description: event.target.value
        })
    }

    handeOnSubmit = event => {
        event.preventDefault();
        this.props.addItem(this.state.name, this.state.address, this.state.description)
    }

    render (){
        return(
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <input type="text" placeholder="name" onChange={this.handleNameChange}/>
                    <input type='text' placeholder="address" onChange={this.handleAddressChange}/>
                    <input type="text" placeholder="description" onChange={this.handleDescriptionChange}/>
                    <button type="submit">create</button>
                </form>
            </div>
        )
    }
}