import React from "react";
import { CardWithImage } from "./CardWText";

const CardGrid = ({ cards }) => (
	<div className="d-flex flex-wrap justify-content-between">
		{cards.map((cardData) => (
			<CardWithImage key={cardData.id} image={cardData.image} text={cardData.text} />
		))}
	</div>
);

export default CardGrid;
