import React from 'react';

class List extends React.Component {

    styles = {
        border: '3px solid blue'
      }

    render(){
    return this.props.listItems.map((item) => (
        <p style={this.styles} key={item.id}>{item.name} is {item.age} years old</p>
    ))

  }
}


export default List;