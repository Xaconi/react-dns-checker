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
				<strong>A</strong> records
			</ResultsTable>

			<ResultsTable
				records={props.recordsAAAA}
				type="AAAA"
			>
				<strong>AAAA</strong> records
			</ResultsTable>
			

			<ResultsTable
				records={props.recordsMX}
				type="MX"
			>
				<strong>MX</strong> records
			</ResultsTable>

			<ResultsTable
				records={props.recordsCNAME}
				type="CNAME"
			>
				<strong>CNAME</strong> records
			</ResultsTable>

			<ResultsTable
				records={props.recordsNS}
				type="NS"
			>
				<strong>NS</strong> records
			</ResultsTable>

			<ResultsTable
				records={props.recordsPTR}
				type="PTR"
			>
				<strong>PTR</strong> records
			</ResultsTable>

			<ResultsTable
				records={props.recordsSOA}
				type="SOA"
			>
				<strong>SOA</strong> records
			</ResultsTable>

			<ResultsTable
				records={props.recordsTXT}
				type="TXT"
			>
				<strong>TXT</strong> records
			</ResultsTable>
		</>
	);
}

export default Results;
