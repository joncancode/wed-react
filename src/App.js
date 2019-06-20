import React, { Component } from 'react';
import './App.css';
import MyNumber from './components/MyNumber'
import List from './components/List' 
class App extends Component {
state = {
  myNum: Math.floor(Math.random() * 100),
  listItems: [
    {id: 1, name: 'Spactacus'},
    {id: 2, name: 'Zelda'},
    {id: 3, name: 'Harry Potter'}
  ]
}

  render() {
console.log(this.state)

    return (
      <div className="App">
        <div className="App-header">        
          <h2>App Component</h2>
<MyNumber myNum={this.state.myNum}/>
<List listItems={this.state.listItems}/>

        </div>
      </div>
    );
  }
}

export default App;
