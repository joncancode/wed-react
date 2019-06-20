import React, { Component } from 'react';
import './App.css';
import MyNumber from './components/MyNumber'
import List from './components/List' 
import Axios from './components/Axios'
class App extends Component {
styles = {
  border: '3px solid orange'
}
  
state = {
  myNum: Math.floor(Math.random() * 100),
  listItems: [
    {id: 1, name: 'Spactacus', age: 30},
    {id: 2, name: 'Zelda', age: 20},
    {id: 3, name: 'Harry Potter', age: 15}
  ]
}

  render() {

    return (
      <div className="App">
        <div className="App-header">        
          <h2 style={this.styles}>App Component</h2>
          <MyNumber myNum={this.state.myNum}/>
          <List listItems={this.state.listItems}/>
          <Axios/>
        </div>
      </div>
    );
  }
}

export default App;
