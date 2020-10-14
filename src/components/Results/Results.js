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
		</>
	);
}

export default Results;
