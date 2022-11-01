import React, { Component } from 'react'
import Form from './Form';
export class Resault extends Component {

    computeBmi() {
        let bmiValue = ( this.state.userWight / this.state.userHight) / this.state.userHight;
        this.setState({ bmi : bmiValue });
        let bmiClass = this.getBmi(bmiValue);
        this.setState({ bmiClass : bmiClass });
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


    render() {
    return (
        <div >
            <div className='container w-50'>
            <div class="alert alert-danger alert-dismissible fade show" role="alert">
                The result is {this.state.bmi} and its 
                <a href="#" class="alert-link">{this.state.bmiClass}</a>
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label=""></button>
        </div>
            </div>
            </div>
    )
  }
}

export default Resault