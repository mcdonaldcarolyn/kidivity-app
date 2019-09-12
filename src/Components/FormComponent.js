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

    handeOnSumbit = event => {
        this.props.addItem(this.state.name, this.state.address, this.state.description)
    }

    render (){
        return(
            <div>
                <form onSubmit={this.props.addItem}>
                    <input type="text" placeholder="name" onChange={this.handleNameChange}/>
                    <input type='text' placeholder="address"/>
                    <input type="text" placeholder="description"/>
                    <button type="submit">create</button>
                </form>
            </div>
        )
    }
}