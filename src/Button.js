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

    // inline styling
    const onButton = {
      backgroundColor: "yellow"
    }
    // inline styling 
    const offButton = {
      backgroundColor: "#0E143A"
    }

    let buttonPage = null;
    
    if (this.state.state) {
      buttonPage = (
        <div className="majorDiv" id="on" style={onButton}>
          <h1>Click the Button</h1>
          <button type="button" onClick={this.handleButtonClick}>This button is true.</button>
        </div>
      );
      console.log(`Button state: ${this.state.state}`);
    }
    else {
      buttonPage = (
        <div className="majorDiv" id="off" style={offButton}>
          <h1>Click the Button</h1>
          <button type="button" onClick={this.handleButtonClick}>This button is false.</button>
        </div>
      );
      console.log(`Button state: ${this.state.state}`);
    }

    return buttonPage;
  }

};

export default Button;