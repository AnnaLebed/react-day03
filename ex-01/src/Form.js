import React, { Component } from "react";

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      message: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      message: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(`The form was submitted with ${this.state.message}`);
    this.props.callbackFc(this.state.message);
    this.setState({
      message: "",
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="send-message-form">
        <input
          type="text"
          className="form-input"
          onChange={this.handleChange}
          value={this.state.message}
          placeholder="Type here"
        />
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </form>
    );
  }
}
