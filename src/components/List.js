import React, { Component } from 'react';

class List extends React.Component {
    render(){
    return this.props.listItems.map((item) => (
        <p key={item.id}>{item.name}</p>
    ))

  }
}


export default List;