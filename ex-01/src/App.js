import React from 'react';
import './App.css';
import Api from './lib/api.js'
import Form from './Form.js'
import Header from './Header.js'

class App extends React.Component {
  constructor(props){
  super(props);
  this.state = {

  }
}

  render () {
    return (
      <div className="App shadow-sm p-3 mt-2 bg-white rounded ml-5 mx-auto main-wrapper">
        <Header name = "List of products"/>        
        <Form />
        <Api />       
      </div>
    );
  }
}

export default App;
