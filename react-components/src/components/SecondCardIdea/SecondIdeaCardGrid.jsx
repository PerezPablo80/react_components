import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import viteLogo from "/vite.svg";
import SecondCardGrid from "./SecondCardGrid";
const cardData = [
	// Replace with your actual card data objects
	{ id: 1, imageUrl: viteLogo, text: "123456789 111213" },
	{ id: 2, imageUrl: viteLogo, text: "Card 2 longer to see what happend" },
	{ id: 3, imageUrl: viteLogo, text: "Card 1 text" },
	{ id: 4, imageUrl: viteLogo, text: "Card 2 longer to see what happend" },
	{ id: 5, imageUrl: viteLogo, text: "Card 1 text" },
	{ id: 6, imageUrl: viteLogo, text: "Card 2 longer to see what happend" },
	// ... more cards
];

const SecondIdeaCardGrid = () => (
	<Dropdown>
		<DropdownButton menuVariant="dark" id="dropdown-card-grid" title="Card Options">
			<Dropdown.Item as="div">
				<SecondCardGrid cards={cardData} />
			</Dropdown.Item>
		</DropdownButton>
	</Dropdown>
);

export default SecondIdeaCardGrid;
