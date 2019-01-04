import React, { Component } from 'react';
import './App.css';
import RecordVideo from './components/recordVideo';
import RecieveVideo from './components/recieveVideo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <RecordVideo/>
        <RecieveVideo/>
      </div>
    );
  }
}

export default App;
