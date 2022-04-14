//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";
import { Counter } from "./component/counter.jsx";
let timer = 0;

setInterval(() => {
	let six = Math.floor((timer / 100000) % 10);
	let five = Math.floor((timer / 10000) % 10);
	let four = Math.floor((timer / 1000) % 10);
	let three = Math.floor((timer / 100) % 10);
	let two = Math.floor((timer / 10) % 10);
	let one = Math.floor(timer % 10);
	console.log(one, two, three, four, five, six);
	timer++;
	ReactDOM.render(
		<Counter
			firstDigit={one}
			secondDigit={two}
			thirdDigit={three}
			fourthDigit={four}
			fifthDigit={five}
			sixthDigit={six}
		/>,
		document.querySelector("#app")
	);
}, 1000);
