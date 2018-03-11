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
      this.setState(() => ({state: false}));
    }
    else {
      // this.setState({state: true});
      this.setState(() => ({state: true}));
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

    let theStyle = null;
    let buttonName = null;

    if (this.state.state) {
      theStyle = onButton;
      buttonName = "ON";
    }

    else {
      theStyle = offButton;
      buttonName = "OFF";
    }

    let buttonPage = (
      <div className="majorDiv" id="off" style={theStyle.theDiv}>
        <h1 style={theStyle.theHeader}>Click the Button</h1>
        <button type="button" style={theStyle.theButton} onClick={this.handleButtonClick}>Button: {buttonName}</button>
      </div>
    );
    console.log(`Button state: ${this.state.state}`);

    return buttonPage;
  }

};

export default Button;