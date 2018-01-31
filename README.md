# On/Off Button

## About
This is a small React app that allows users to click a button on or off.

## How It Works
* The button is rendered with a Button component, `Button.js`. 
* Inside the component, there is a state initially set to `{state: true}`.
* Each button click changes the state between `{state: true}` and `{state: false}` with an onClick method called`handleButtonClick()`.
* The two states render a different version of the button and the div container surrounding the button.
* Each version uses different CSS properties, which changes the appearnce of the page. 