import React from "react";

const Help = (props) => {
	const count = props.count;
	return(
		<div className="container">
			<div>
				<h3>Help Me::{count}</h3>
			</div>
			<button onClick={(evt)=>props.func(1)}>Please</button>
		</div>
		);
};

export default Help;