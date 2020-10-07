import React, { useState } from "react";

const App = () => {

	const [state, setState] = useState({
		domain : ''
	});

	function handleChange(event) { 
		setState({domain: event.target.value});
	}

	const getDomainInfo = () => {
		console.log(state.domain);

		// @TODO - POST to Netlify Function to get DNS domain info...
		// fetch('http://localhost:56233/dns-check')
	}

	return (
		<div>
			<h1> Hello world! I'm the React-DNS-Checker! </h1>

			<input 
				type="text" 
				placeholder="Put the domain here..."
				onChange={handleChange}
				value={state.domain}
			>
			</input>

			<button onClick={getDomainInfo}>Get domain info!</button>
		</div>
	);
};

export default App;
