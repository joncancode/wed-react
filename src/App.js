import React, { Component } from 'react';
import './App.css';
import MyNumber from './components/MyNumber'
import List from './components/List' 
class App extends Component {
state = {
  myNum: Math.floor(Math.random() * 100)
}

  render() {
    return (
      <div className="App">
        <div className="App-header">        
          <h2>App Component</h2>
<h3>App comp number is: {this.state.myNum}</h3>
<MyNumber myNum={this.state.myNum}/>
<List/>

        </div>
      </div>
    );
  }
}

export default App;
