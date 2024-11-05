import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import CardGrid from "./CardGrid";
import viteLogo from "/vite.svg";
const cardData = [
	// Replace with your actual card data objects
	{ id: 1, image: viteLogo, text: "Card 1 text" },
	{ id: 2, image: viteLogo, text: "Card 2 longer to see what happend" },
	// ... more cards
];

const DropdownWithCardGrid = () => (
	<Dropdown>
		<DropdownButton id="dropdown-card-grid" title="Card Options">
			<Dropdown.Item as="div">
				<CardGrid cards={cardData} />
			</Dropdown.Item>
		</DropdownButton>
	</Dropdown>
);

export default DropdownWithCardGrid;
