import React, { Component } from 'react';

class MyNumber extends Component {
  render() {

    console.log(this.props)

    return (
      <div>
          
          <h2>My Number: {this.props.myNum}</h2>

      </div>
    );
  }
}

export default MyNumber;