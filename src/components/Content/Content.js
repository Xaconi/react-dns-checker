import React, { useState } from 'react';
import DNSForm from '../DNSForm/DNSForm';
import Results from '../Results/Results';

const Content = () => { 

	const [state, setState] = useState({
		domain: '',
		recordsA: '',
		recordsAAAA: '',
		recordsMX: '',
		recordsCNAME: '',
		recordsNS: '',
		recordsPTR: '',
		recordsSOA: '',
		recordsTXT: ''
	});

	const updateDomainInfo = ({
		domain, 
		recordsA,
		recordsAAAA,
		recordsMX,
		recordsCNAME,
		recordsNS,
		recordsPTR,
		recordsSOA,
		recordsTXT
	}) => {
		console.log(recordsTXT);
		setState({
			domain,
			recordsA,
			recordsAAAA,
			recordsMX,
			recordsCNAME,
			recordsNS,
			recordsPTR,
			recordsSOA,
			recordsTXT
		});
	}

	return (
		<section className="wrapper">
			<style jsx>{`
				.wrapper {
					max-width: 800px;
					margin: 0 auto;
					text-align: center;
				}

				p {
					font-family: 'Merriweather';
					font-size: 20px;
					color: white;
					text-align: center;
				}
			`}</style>
			<p>
				Check your domain DNS records live!
				<br></br>
				Copy and share your results to have a backup in case of disaster! 😱
			</p>
			<DNSForm
				handleUpdate={updateDomainInfo}>
			</DNSForm>
			{state.domain != '' ? 
				<Results
					recordsA={state.recordsA}
					recordsAAAA={state.recordsAAAA}
					recordsMX={state.recordsMX}
					recordsCNAME={state.recordsCNAME}
					recordsNS={state.recordsNS}
					recordsPTR={state.recordsPTR}
					recordsSOA={state.recordsSOA}
					recordsTXT={state.recordsTXT}
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
