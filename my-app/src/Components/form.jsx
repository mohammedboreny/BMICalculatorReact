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
                BMI ===0 ? "enter positive values": BMI< 18.5 ? "underweight" : BMI < 24.9 && BMI >= 18.5 ? "Normalweight" : BMI < 29.9 && BMI >= 25 ? "Overweight": "Obesity"
        });
      }

    render() {
        return (
                <body className="text-center" data-new-gr-c-s-check-loaded="14.1085.0" data-gr-ext-installed="">
                <main className="form-signin w-100 m-auto">
                <img class="mb-4" src="" alt="" width="72" height="57"/>

                    <div className="container w-25">
                    <form onSubmit={this.handleSubmit}>
                    <legend>Enter hight:</legend>
                    <input type="text"
                        value={this.state.hight}
                        onChange={this.handleHight} />
                    <legend>Enter in wight:</legend>
                    <br />
                    <input type="text" className='mb-5'
                        value={this.state.wight}
                            onChange={this.handleWight} />
                          <input type="submit"  className="w-100 btn btn-lg btn-primary" value="Submit" />
                    </form> 
                    </div>
                    <div className='container'>{ this.state.finalResult?<Resault catch={this.state.finalResult}/> : ""}</div>    
         </main>       
</body >
        );
    }
}

export default Form