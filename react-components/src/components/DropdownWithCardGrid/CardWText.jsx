import React from "react";
import { Card, Image } from "react-bootstrap";

//it can be adjustable the size of the card!
const CardWithImage = ({ image, text }) => (
	<Card style={{ width: "6rem", padding: "0.7em" }}>
		<Image variant="top" src={image} alt="Imagen no disponible" />
		<Card.Body>
			{text}
			{/* <Card.Text style={{ whiteSpace: "nowrap", textAlign: "left" }}></Card.Text> */}
		</Card.Body>
	</Card>
);
//maxHeight: "80px", overflowY: "auto",padding:'none'
const CardWithoutImage = ({ text }) => (
	<Card style={{ width: "15rem" }}>
		<Image variant="top" src={null} alt="Imagen no disponible" />
		<Card.Body>
			<Card.Title>{text}</Card.Title>
		</Card.Body>
	</Card>
);

export { CardWithImage, CardWithoutImage };
