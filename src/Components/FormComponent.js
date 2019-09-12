import React, {Component} from 'react';

export default class FormComponent extends Component{
    state={
        userInput: ''
    };

    handleInputChange = event => {
        this.setState({
            userInput: event.target.value
        })
    }
    render (){
        return(
            <div>
                <form onSubmit={this.props.addItem}>
                    <input type="text" placeholder="name" onChange={this.handleInputChange}/>
                    <input type='text' placeholder="address"/>
                    <input type="text" placeholder="description"/>
                    <button type="submit">create</button>
                </form>
            </div>
        )
    }
}