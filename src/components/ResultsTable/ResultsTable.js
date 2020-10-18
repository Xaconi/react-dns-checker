// Core
import React from 'react';

const ResultsTable = (props) => {
	return (
		<>
			<style jsx>{`
				h2 {
					font-family: 'Merriweather';
					margin: 20px 0 0 0;
					background-color: #ffca61;
    				border: 2px solid #ec5c00;
					padding: 5px 0;
				}

				.returnBlock {
					padding: 10px;
    				background-color: #dedede;
					display: flex;
					flex-direction: row;
					flex-wrap: nowrap;
					justify-content: space-around;
					background-color: #ff8f47;
    				border: 2px solid #ec5c00;
				}

				span {
					font-family: 'Merriweather';
				}
			`}</style>
			{typeof props.records != 'undefined' && props.records.length > 0
			? <>
				<h2>{props.children}</h2>

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
