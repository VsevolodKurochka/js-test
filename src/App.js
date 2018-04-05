import React, { Component } from 'react';
import Test from './components/Test';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="jumbotron">
          <div className="container">
            <Test />
          </div>
        </div>
      </div>
    );
  }
}

export default App;