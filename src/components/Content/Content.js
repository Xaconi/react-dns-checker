import React, { useState } from 'react';
import DNSForm from '../DNSForm/DNSForm';
import Results from '../Results/Results';

const Content = () => { 

	const [state, setState] = useState({
		domain: '',
		recordsA: ''
	});

	const updateDomainInfo = ({domain, recordsA}) => {
		console.log(recordsA);
		setState({
			domain,
			recordsA
		});
	}

	return (
		<section>
			<DNSForm
				handleUpdate={updateDomainInfo}>
			</DNSForm>
			{state.domain != '' ? 
				<Results
					recordsA={state.recordsA}
				>
					These are the results for {state.domain}
				</Results>
			: 
				<></>
			}
			
		</section>
	);
}

export default Content;
