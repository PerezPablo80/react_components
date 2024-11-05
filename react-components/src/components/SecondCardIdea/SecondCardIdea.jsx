import React, { useState } from "react";
import "./style.css"; // Import your CSS file

const SecondCardIdea = ({ id, imageUrl, text }) => {
	const [isClicked, setIsClicked] = useState(false);

	const handleClick = () => {
		setIsClicked(!isClicked);
		//Action over clicked
	};

	return (
		<div className={`rectangle ${isClicked ? "clicked" : ""}`} onClick={handleClick}>
			<img src={imageUrl} alt="Rectangle" />
			<div className="text">{text}</div>
		</div>
	);
};

export default SecondCardIdea;
