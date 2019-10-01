import React, {Component} from 'react';
import {categories } from '../data/categories';

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
    handleCategoryChange = event =>{
        event.preventDefault();
        this.setState({
            category: event.target.value
        })
    }

    handleOnSubmit = event => {
        event.preventDefault();
        this.props.addActivity({
            name: this.state.name, 
            address: this.state.address, 
            description: this.state.description, 
            category: this.state.category
        });
        this.setState({
            name: '',
            address: '',
            description: '',
            category: '',
        });
    };
    renderCategories(){
        return categories.map((category, idx) => {
            return (
                <option key={idx} value={category.id}>
                {category.name}
                </option>
            )
        })
    }

    render (){
        return(
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <input type="text" placeholder="name" onChange={this.handleNameChange}/>
                    <input type='text' placeholder="address" onChange={this.handleAddressChange}/>
                    <input type="text" placeholder="description" onChange={this.handleDescriptionChange}/>
                    <select name="category" onChange={this.handleCategoryChange}>
                        <option>choose category</option>
                        {this.renderCategories()}
                    </select>
                    <button type="submit">create</button>
                </form>
            </div>
        )
    }
}