import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Create a React app from scratch.
// Show a single h1 that says "Good Morning" if between midnight and 12pm.
// or "Good Afternoon" if between 6pm and midnight.
// Apply the "heading" style in the Styles.css.
// Dynamically change the color of the h1 using inline css styles.
// Morning = red, Afternoon = green, Night = blue.

const currentHour = new Date().getHours();
const colors = {
  color: "",
  greeting: ""
}

if (currentHour >= 0 && currentHour < 12) {
  colors.color = "red";
  ReactDOM.render(
    <h1 className="heading" style={colors}>Good Morning!</h1>,
    document.getElementById("root")
  );
} else if (currentHour >= 12 && currentHour < 19) {
  colors.color = "green";
  ReactDOM.render(
    <h1 className="heading" style={colors}>Good Afternoon!</h1>,
    document.getElementById("root")
  );
} else {
  colors.color = "blue";
  ReactDOM.render(<h1 className="heading" style={colors}>Good Night!</h1>,
  document.getElementById("root")
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();