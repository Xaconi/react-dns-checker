import React, { useState } from 'react';

const DNSForm = (props) => { 
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

	const getDomainInfo = async (event) => {
		event.preventDefault();

		// const result = await fetch(`${process.env.REACT_APP_URL_NETLIFY_FUNCTIONS}dns-check?domain=${state.domain}`);
		const result = await fetch(`http://localhost:50209/dns-check?domain=${state.domain}`);
		
		const response = await result.json();

		props.handleUpdate({
			domain : state.domain,
			recordsA : response.recordsA,
			recordsAAAA : response.recordsAAAA,
			recordsMX : response.recordsMX,
			recordsCNAME : response.recordsCNAME,
			recordsNS : response.recordsNS,
			recordsPTR : response.recordsPTR,
			recordsSOA : response.recordsSOA,
			recordsTXT : response.recordsTXT
		});

		setState({
			domain: state.domain,
			domainInfo : `The domain address is ${response.address} and the family is ${response.family}`
		})
	}

	return (
		<form onSubmit={getDomainInfo}>
			<input 
				type="text" 
				placeholder="Put the domain here..."
				onChange={handleChange}
			>
			</input>

			<button>Get domain info!</button>

			{state.domainInfo != '' ? 
			<p>{state.domainInfo}</p>
			: <></>}
		</form>
	);
}

export default DNSForm;
