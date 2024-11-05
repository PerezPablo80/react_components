import React from "react";
import SecondCardIdea from "./SecondCardIdea";

const SecondCardGrid = ({ cards }) => (
	<div className="d-flex flex-wrap justify-content-between">
		{cards.map((cardData) => (
			<SecondCardIdea key={cardData.id} imageUrl={cardData.imageUrl} text={cardData.text} />
		))}
	</div>
);

export default SecondCardGrid;
