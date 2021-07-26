import React, { Component } from 'react';

const style = {
	background: "lightblue",
	border: "2px solid darkblue",
	fontSize: "30px",
	fontWeight: "800",
	cursor: "pointer",
	outline: "none",
};

const Square = ({ value, onClick }) => (
	<button style={style} onClick={onClick}>
		{value}
	</button>
);

export default Square;

//destructuring props
//props is an object that lets you get values
//const Square = (props) is usually passed down with props.value for example
//destructuring it like above let's to avoid having to type props. everytime
//curly braces is the sign of an object