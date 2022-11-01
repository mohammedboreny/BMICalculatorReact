import React, { Component } from 'react';
import Resault from './resault';
export class Form extends Component {
    constructor(props) {
        super(props);
        this.handleHight = this.handleHight.bind(this);
        this.handleWight = this.handleWight.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = { hight: '', wight: '',finalResult:'' };
    }

    handleHight(e) {
        this.setState({ hight: e.target.value });
        console.log(this.state.hight);
    }
    handleWight(e) {
        this.setState({ wight: e.target.value });
        console.log(this.state.wight);
    }e
    handleSubmit(e) {
        e.preventDefault();
        const BMI =
          (this.state.wight / this.state.hight / this.state.hight) * 10000;
    
        this.setState({
            finalResult:
                BMI < 18.5 ? "underweight" : BMI < 24.9 && BMI >= 18.5 ? "Normalweight" : BMI < 29.9 && BMI >= 25 ? "Overweight": "Obesity"
        });
      }

    render() {
        return (
            <div>
            <div>
                    <form onSubmit={this.handleSubmit}>
                    <legend>Enter hight:</legend>
                    <input type="text"
                        value={this.state.hight}
                        onChange={this.handleHight} />
                    <legend>Enter in wight:</legend>
                    <br />
                    <input type="text"
                        value={this.state.wight}
                            onChange={this.handleWight} />
                          <input type="submit" value="Submit" />
                    </form> 

                    <div className='container'>{ this.state.finalResult?<Resault catch={this.state.finalResult}/> : ""}</div>    
                </div>
                </div>

        );
    }
}

export default Form