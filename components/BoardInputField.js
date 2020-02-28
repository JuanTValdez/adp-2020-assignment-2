import React, { Component } from 'react'
import '../src/App.css'

export default class BoardInputField extends Component{

    render(){
        const { field } = this.props;
        return(
            <input className="field" value={field.value} readOnly={field.readonly} />
        );

    }
}