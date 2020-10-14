// Core
import React from 'react';

const ResultsTable = (props) => {
	return (
		<>
			{typeof props.records != 'undefined' && props.records.length > 0
			? <>
				{props.children}

				{props.records.map(
					(record, index) => 
						<div className="returnBlock" key={index}>
							<span>{props.type}</span>
							{
								typeof record === "string" ? <span>{record}</span>
								: Array.isArray(record) ? <span>{record[0]}</span>
								: <span>{record.exchange} | {record.priority}</span>
							}
						</div>
					)
				}
			</>
			: ''}
		</>
	);
}

export default ResultsTable;
