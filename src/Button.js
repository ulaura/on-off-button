import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleButtonTrueClick = this.handleButtonTrueClick.bind(this);
    this.handleButtonFalseClick = this.handleButtonFalseClick.bind(this);
    this.state = {state: true};
  }

  handleButtonClick = () => {
    if (this.state.state) {
      this.setState({state: false});
    }
    else {
      this.setState({state: true});
    }
    console.log("handleButtonClick GO!");
  }

  handleButtonTrueClick = () => {
    console.log("handleButtonTrue");
    this.setState({state: true});
  }

  handleButtonFalseClick = () => {
    console.log("handleButtonFalse");
    this.setState({state: false});
  }

  /*
  buttonMessage = (message) => {
    if (message) {
      return <button type="button">This button is true.</button>;
    }
    else {
      return <button type="button">This button is false.</button>;
    }
  }
  */

  render() {
    // let message = true; 

    // const button1 = <button type="button">This button is true.</button>;
    // const button2 = <button type="button">This button is false.</button>;
    let button = null;

    if (this.state.state) {
      button = <button type="button" onClick={this.handleButtonClick}>This button is true.</button>;
      console.log(`Button state: ${this.state.state}`);
    }
    else {
      button = <button type="button" onClick={this.handleButtonClick}>This button is false.</button>;
      console.log(`Button state: ${this.state.state}`);
    }

    return (
      <div>
        <h1>Click the Button</h1>
        {button}
      </div>
    );
  }

};

export default Button;