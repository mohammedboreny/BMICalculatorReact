import React, { Component } from 'react'


export class Resault extends Component {
    render() {
    return (
        <div >
            <div className='container w-50'>
            <div class="alert alert-danger alert-dismissible fade show" role="alert">
                    The result is {this.props.catch}
                <a href="#" class="alert-link"></a>
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label=""></button>
        </div>
            </div>
            </div>
    )
  }
}

export default Resault