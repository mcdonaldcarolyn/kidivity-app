import React, {Component} from 'react';

export default class FormComponent extends Component{
    render (){
        return(
            <div>
                <form>
                    <input type="text" placeholder="name"/>
                    <input type='text' placeholder="address"/>
                    <input type="text" placeholder="description"/>
                    <button type="submit">create</button>
                </form>
            </div>
        )
    }
}