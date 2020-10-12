import React, { useState } from "react";

const App = () => {

	const [state, setState] = useState({
		domain: '',
		domainInfo: ''
	});

	function handleChange(event) { 
		setState({
			domain: event.target.value,
			domainInfo: state.domainInfo
		});
	}

	const getDomainInfo = async () => {
		const result = await fetch(`${process.env.REACT_APP_URL_NETLIFY_FUNCTIONS}dns-check?domain=${state.domain}`);
		const response = await result.json();

		setState({
			domain: state.domain,
			domainInfo : `The domain address is ${response.address} and the family is ${response.family}`
		})
	}

	return (
		<div>
			<h1> Hello world! I'm the React-DNS-Checker! </h1>

			<input 
				type="text" 
				placeholder="Put the domain here..."
				onChange={handleChange}
			>
			</input>

			<button onClick={getDomainInfo}>Get domain info!</button>

			{state.domainInfo != '' ? 
			<p>{state.domainInfo}</p>
			: <></>}
		</div>
	);
};

export default App;
