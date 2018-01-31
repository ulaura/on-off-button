import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
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


  render() {

    // inline styling for Button: ON
    const onButton = {
      backgroundColor: "yellow"
    }

    // inline styling for Button: OFF
    const offButton = {
      theDiv: {
        backgroundColor: "#0E143A"
      },
      
      theButton: {
        backgroundColor: "green"
      }
    }

    let buttonPage = null;

    if (this.state.state) {
      buttonPage = (
        <div className="majorDiv" id="on" style={onButton}>
          <h1>Click the Button</h1>
          <button type="button" onClick={this.handleButtonClick}>Button: ON</button>
        </div>
      );
      console.log(`Button state: ${this.state.state}`);
    }

    else {
      buttonPage = (
        <div className="majorDiv" id="off" style={offButton.theDiv}>
          <h1>Click the Button</h1>
          <button type="button" style={offButton.theButton} onClick={this.handleButtonClick}>Button: OFF</button>
        </div>
      );
      console.log(`Button state: ${this.state.state}`);
    }

    return buttonPage;
  }

};

export default Button;