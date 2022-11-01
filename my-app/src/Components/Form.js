import React, { Component } from 'react'
import TextInput from './TextInput'
class Form extends Component {
  render() {
    return (
        <div>
            <TextInput label="Height" placeholder="Enter height in meters" onChange={this.heightChange}/>  
            <TextInput label="Weight" placeholder="Enter weight in kg" onChange={this.weightChange} />    
      </div>
    )
  }
}

export default Form