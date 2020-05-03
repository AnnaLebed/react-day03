import React from 'react';
import './App.css';
import Api from './lib/api.js'

class App extends React.Component {
  constructor(props){
  super(props);
  this.state = {

  }
}

  render () {
    return (
      <div>
        <Api />       
      </div>
    );
  }
}

export default App;
