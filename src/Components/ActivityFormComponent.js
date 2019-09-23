import React, {Component} from 'react';

export default class FormComponent extends Component{
    state = {
        name: '',
        address: '',
        description: '', 
        category:'',
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
    handlecategoryChange = event =>{
        event.preventDefault();
        this.setState({
            category: event.target.value
        })
    }

    handleOnSubmit = event => {
        event.preventDefault();
        this.props.addItem(this.state.name, this.state.address, this.state.description, this.state.category)
        this.setState({
            name: '',
            address: '',
            description: '',
            category: '',
        })
    }

    render (){
        return(
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <input type="text" placeholder="name" onChange={this.handleNameChange}/>
                    <input type='text' placeholder="address" onChange={this.handleAddressChange}/>
                    <input type="text" placeholder="description" onChange={this.handleDescriptionChange}/>
                    <select name="category" onChange={this.handlecategoryChange}>
                        <option value="littles">littles</option>
                        <option value="bigger kids">bigger kids</option>
                        <option value="tween and older">tween and older</option>
                    </select>
                    <button type="submit">create</button>
                </form>
            </div>
        )
    }
}