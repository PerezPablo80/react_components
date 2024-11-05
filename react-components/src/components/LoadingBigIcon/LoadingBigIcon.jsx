import React from "react";
import Spinner from "react-bootstrap/Spinner";
import styled from "styled-components";
import reactLogo from "./../../assets/react.svg";
const StyledLoadingIcon = styled(Spinner)`
	width: 300px;
	height: 300px;
	color: chocolate;
	visibility: visible;
	display: flex;
`;

function LoadingBigIcon() {
	return <StyledLoadingIcon />;
}
export default LoadingBigIcon;
{
	/*
    
		
			
		</StyledLoadingIcon>
    // <div className="loading-icon">
		// 	<p> Hola</p></div> */
}
