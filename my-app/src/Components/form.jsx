import React, { Component } from 'react';
import Resault from './resault';
export class Form extends Component {
    constructor(props) {
        super(props);
        this.handleHight = this.handleHight.bind(this);
        this.handleWight = this.handleWight.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = { hight: '', wight: '',sum:'',bmiClass: '', bmi: '' };
    }

    handleHight(e) {
        this.setState({ hight: e.target.value });
        console.log(this.state.hight);
    }
    handleWight(e) {
        this.setState({ wight: e.target.value });
    }
         getBmi(bmi) {
            if(bmi < 18.5) {
                return "Underweight";
            }
            if(bmi >= 18.5 && bmi < 24.9) {
                return "Normal weight";
            }
            if(bmi >= 25 && bmi < 29.9) {
                return "Overweight";
            }
            if(bmi >= 30) {
                return "Obesity";
            }
        }
    
        computeBmi(){
            let bmiValue = ( this.state.userWight / this.state.userHight) / this.state.userHight;
            this.setState({ bmi : bmiValue });
            let bmiClass = this.getBmi(bmiValue);
            this.setState({ bmiClass : bmiClass });
        }
    
    
    handleSubmit(e) {
        e.preventDefault();
        let bmiValue = ( parseInt(this.state.userWight) / parseInt(this.state.userHight)) / parseInt(this.state.userHight);
        this.setState({ bmi: bmiValue });
        console.log(this.state.bmi);
        // let bmiClass = this.getBmi(bmiValue);
        // this.setState({ bmiClass : bmiClass })
    }

    render() {
        const hight = this.state.hight;
        const wight = this.state.wight;
        return (
            <div>
            <div>
                    <form onSubmit={this.handleSubmit}>
                    <legend>Enter hight:</legend>
                    <input type="text"
                        value={hight}
                        onChange={this.handleHight} />
                    <legend>Enter in wight:</legend>
                    <br />
                    <input type="text"
                        value={wight}
                            onChange={this.handleWight} />
                          <input type="submit" value="Submit" />
                </form>              
                </div>
                </div>

        );
    }
}

export default Form