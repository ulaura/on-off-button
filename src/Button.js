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
      theHeader: {
        color: "#ACA7C4",
      }, 

      theDiv: {
        backgroundColor: "white"
      },
      
      theButton: {
        backgroundColor: "white",
        borderColor: "#F2C9C9"
      }
    }

    // inline styling for Button: OFF
    const offButton = {
      theHeader: {
        color: "#F2E98B"
      },

      theDiv: {
        backgroundColor: "#0E143A"
      },
      
      theButton: {
        backgroundColor: "white",
        borderColor: "silver"
        
      }
    }

    let buttonPage = null;

    if (this.state.state) {
      buttonPage = (
        <div className="majorDiv" id="on" style={onButton.theDiv}>
          <h1 style={onButton.theHeader}>Click the Button</h1>
          <button type="button" style={onButton.theButton} onClick={this.handleButtonClick}>Button: ON</button>
        </div>
      );
      console.log(`Button state: ${this.state.state}`);
    }

    else {
      buttonPage = (
        <div className="majorDiv" id="off" style={offButton.theDiv}>
          <h1 style={offButton.theHeader}>Click the Button</h1>
          <button type="button" style={offButton.theButton} onClick={this.handleButtonClick}>Button: OFF</button>
        </div>
      );
      console.log(`Button state: ${this.state.state}`);
    }

    return buttonPage;
  }

};

export default Button;