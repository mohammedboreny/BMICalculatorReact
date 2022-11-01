import React, { Component } from 'react'

export class TextInput extends Component {
    constructor(props) {
        super(props);
        this.state = { value : '' };
        // binding of 'this' in our constructor to our method handleChange is necessary for 'this' to work in handleChange method
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        let inputValue = event.target.value;
        this.setState({ value : inputValue });
        this.props.onChange(inputValue);
    }
  
    render() {
    return (
        <div>
                    <div className="form-floating">
                <input type="text" className="form-control" id="floatingInput" value={this.state.value} placeholder={this.props.placeholder} onChange={this.handleChange} />
                        <label for="floatingInput">{ this.props.label }</label>
                </div>
        </div>
    )
  }
}

export default TextInput