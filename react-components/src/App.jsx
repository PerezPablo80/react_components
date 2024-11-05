import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LoadingBigIcon from "./components/LoadingBigIcon/LoadingBigIcon";
import "bootstrap/dist/css/bootstrap.min.css";
import { CardWithImage } from "./components/DropdownWithCardGrid/CardWText";
import CardGrid from "./components/DropdownWithCardGrid/CardGrid";
import DropdownWithCardGrid from "./components/DropdownWithCardGrid/DropdownWithCardGrid";
import Rectangle from "./components/SecondCardIdea/SecondCardIdea";
import SecondIdeaCardGrid from "./components/SecondCardIdea/SecondIdeaCardGrid";
import EmailSender from "./components/EmailSender/EmailSender";
function App() {
	const [count, setCount] = useState(0);
	const [btnDisabled, setBtnDisabled] = useState(false);
	return (
		<>
			<Rectangle imageUrl={reactLogo} text={"Prueba de imag en seleccionable"} />
			<DropdownWithCardGrid />
			<br />
			<p>El de abajo es el segundo</p>
			{/* <SecondIdeaCardGrid /> */}
			<button
				disabled={btnDisabled}
				onClick={async () => {
					setBtnDisabled(true);
					await EmailSender({
						to: "perez.pablo@jade.com.uy",
						subject: "prueba de envío",
						bodyText: "prueba 1",
						bodyHtml: false,
						attachments: [],
					});
					setBtnDisabled(false);
				}}
			>
				Enviar mail
			</button>
			<p>Fin segundo</p>
			<div>
				<a href="https://vitejs.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<CardWithImage text={"TExto de la card"} image={viteLogo} />
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<LoadingBigIcon />
			<h1>Vite + React</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">Click on the Vite and React logos to learn more</p>
		</>
	);
}

export default App;
