import React from 'react';
import './App.css';
import Header from './Header/Header';
import SendMessageForm from './SendMessageForm/SendMessageForm'
import MessagesBox from './MessagesBox/MessagesBox'


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {messagesList : []}
    this.grabInput = this.grabInput.bind(this)
  }
  grabInput(valueString){
    this.setState({messagesList : this.state.messagesList.push(valueString)})

  }
  render(){
    return (
        <div className="App shadow-lg p-3 mt-2 bg-white rounded ml-5 mx-auto">
          <Header />
          <MessagesBox messages= {this.state.messagesList}/>
          <SendMessageForm callbackFc = {this.grabInput}/>
          {/* <MessagesBox>onMessageFormSubmit = {()}></MessagesBox> */}
        </div>
    );
  }
}

export default App;
