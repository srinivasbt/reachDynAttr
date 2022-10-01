import React from "react";
import ReactDOM from "react-dom";

const custInStyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid blue"
};

//const yearDate = new Date(2022, 10, 1, 11, 10, 10);
//Current date;
const yearDate = new Date(2022, 10, 1, 15, 10, 10);
const dayTime = yearDate.getHours();

var dayTimeStr = 0;

if (dayTime < 11) {
  custInStyle.color = "green";
  dayTimeStr = "Good Morning";
} else if (dayTime < 13 && dayTime > 11) {
  custInStyle.color = "red";
  dayTimeStr = "Good Noon";
} else {
  custInStyle.color = "orange";
  dayTimeStr = "Good Evening";
}

console.log(dayTime);
console.log(dayTimeStr);

//With javaScript object in a variable
ReactDOM.render(
  <h1 style={custInStyle}>{dayTimeStr} Onmygoal!</h1>,
  document.getElementById("root")
);

//The second h1 will not appear as same is rendered on root.
/*
ReactDOM.render(
  <h1 style={custInStyle}>Onmygoal world!</h1>,
  document.getElementById("root")
);
*/

//Direct JavaScript object with inline style
/*
ReactDOM.render(
  <h1 style={{ color: "red" }}>Onmygoal world!</h1>,
  document.getElementById("root")
);
*/
