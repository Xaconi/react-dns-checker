// Core
import React from 'react';

// Components
import ResultsTable from '../ResultsTable/ResultsTable';

const Results = (props) => {
	return (
		<>
			{props.children}

			<ResultsTable
				records={props.recordsA}
				type="A"
			>
				'A' records
			</ResultsTable>

			<ResultsTable
				records={props.recordsAAAA}
				type="AAAA"
			>
				'AAAA' records
			</ResultsTable>
			

			<ResultsTable
				records={props.recordsMX}
				type="MX"
			>
				'MX' records
			</ResultsTable>

			<ResultsTable
				records={props.recordsCNAME}
				type="CNAME"
			>
				'CNAME' records
			</ResultsTable>

			<ResultsTable
				records={props.recordsNS}
				type="NS"
			>
				'NS' records
			</ResultsTable>

			<ResultsTable
				records={props.recordsPTR}
				type="PTR"
			>
				'PTR' records
			</ResultsTable>

			<ResultsTable
				records={props.recordsSOA}
				type="SOA"
			>
				'SOA' records
			</ResultsTable>

			<ResultsTable
				records={props.recordsTXT}
				type="TXT"
			>
				'TXT' records
			</ResultsTable>
		</>
	);
}

export default Results;
