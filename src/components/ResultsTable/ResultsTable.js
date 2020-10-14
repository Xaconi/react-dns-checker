// Core
import React from 'react';

const ResultsTable = (props) => {
	return (
		<>
			{props.children}

			{props.records.map(
				(record, index) => 
					<div className="returnBlock" key={index}>
						<span>{props.type}</span>
						<span>{record}</span>
					</div>
				)
			}
		</>
	);
}

export default ResultsTable;
