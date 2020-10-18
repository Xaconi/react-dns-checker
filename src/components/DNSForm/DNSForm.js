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

		const result = await fetch(`${process.env.REACT_APP_URL_NETLIFY_FUNCTIONS}dns-check?domain=${state.domain}`);
		// const result = await fetch(`http://localhost:50209/dns-check?domain=${state.domain}`);
		
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
		<>
			<style jsx>{`
				form {
					margin: 50px 0;
				}

				input, button {			
					padding: 10px 5px;
					font-size: 18px;
					border: none;
					outline: none;
				}

				input {
					border-bottom-left-radius: 10px;
					border-top-left-radius: 10px;
					width: 300px;
				}

				button {
					border-bottom-right-radius: 10px;
					border-top-right-radius: 10px;
					cursor: pointer;
				}
			`}</style>
			<form onSubmit={getDomainInfo}>
				<input 
					type="text" 
					placeholder="Write the domain here..."
					onChange={handleChange}
				>
				</input>

				<button>Get domain info!</button>
			</form>
		</>
	);
}

export default DNSForm;
