import React from "react";
import PropTypes from "prop-types";
export const Counter = (props) => {
	return (
		<div className="container">
			<div className="counter">
				<div className="number text-center">
					<i className="fa-regular fa-clock"></i>
				</div>
				<div className="sixth text-center">{props.sixthDigit}</div>
				<div className="fifth text-center">{props.fifthDigit}</div>
				<div className="fourth text-center">{props.fourthDigit}</div>
				<div className="third text-center">{props.thirdDigit}</div>
				<div className="second text-center">{props.secondDigit}</div>
				<div className="first text-center">{props.firstDigit}</div>
			</div>
		</div>
	);
};
Counter.propTypes = {
	firstDigit: PropTypes.number,
	secondDigit: PropTypes.number,
	thirdDigit: PropTypes.number,
	fourthDigit: PropTypes.number,
	fifthDigit: PropTypes.number,
	sixthDigit: PropTypes.number,
};
