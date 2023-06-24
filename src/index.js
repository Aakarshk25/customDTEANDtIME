//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import React from "react";
import ReactDOM from "react-dom";

var Greeting;
const date = new Date(2023, 1, 1, 23); // you cancreate custom date and time as well.

const RealTime = date.getHours();
if (RealTime < 12) {
  Greeting = <h1 className="morning">Good Morning</h1>;
} else if (RealTime < 18) {
  Greeting = <h1 className="afternoon">Good Afternoon</h1>;
} else {
  Greeting = <h1 className="night">Good Night</h1>;
}
ReactDOM.render(<h1>{Greeting}</h1>, document.getElementById("root"));
