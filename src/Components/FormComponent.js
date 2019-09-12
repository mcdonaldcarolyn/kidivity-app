import React, {Component} from 'react';

export default class FormComponent extends Component{
    state = {
        name: '',
        address: '',
        description: ''
    };

    handleNameChange = event => {
        this.setState({
            name: event.target.value
        })
    }
    handleAddressChange = event => {
        this.setState({
            address: event.target.value
        })
    }
    handleDescriptionChange = event =>{
        this.setState({
            description: event.target.value
        })
    }

    handeOnSumbit = event => {
        this.props.addItem(this.state.name, this.state.address, this.state.description)
    }

    render (){
        return(
            <div>
                <form onSubmit={this.props.addItem}>
                    <input type="text" placeholder="name" onChange={this.handleNameChange}/>
                    <input type='text' placeholder="address" onChange={this.handleAddressChange}/>
                    <input type="text" placeholder="description" onChange={this.handleDescriptionChange}/>
                    <button type="submit">create</button>
                </form>
            </div>
        )
    }
}