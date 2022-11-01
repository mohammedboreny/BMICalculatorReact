import React, { Component } from 'react'

export class Form extends Component {
  render() {
    return (
        <div>
            <body className="text-center" data-new-gr-c-s-check-loaded="14.1085.0" data-gr-ext-installed="">
    
    <main className="container w-25">
      <form>
        <img className="mb-4" src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"/>
        <h1 className="h3 mb-3 fw-normal">Enter Values</h1>
    
        <div className="form-floating">
          <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com"/>
          <label for="floatingInput">1st number</label>
        </div>
        <div className="form-floating">
          <input type="number" className="form-control" id="floatingPassword" placeholder="Password"/>
          <label for="floatingPassword">2st Number</label>
        </div>
    
        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me"/> Remember me
          </label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">Calculate</button>
        <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
      </form>
    </main>
    
    
        
      
    
    </body>

      </div>
    )
  }
}

export default Form