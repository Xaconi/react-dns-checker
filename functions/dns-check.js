const dns = require('dns');

const headers = {
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Methods': 'GET',
};

exports.handler = async event => {
	// Only allow POST
	if (event.httpMethod !== "GET") {
		return { statusCode: 405, body: "Method Not Allowed" };
	}

	// Params reading...
	const domain = event.queryStringParameters.domain;

	const { address, family } = await dnsLookUp(domain);

	return {
		statusCode: 200,
		headers,
		body: JSON.stringify({
			address,
			family
		})
	}
}

async function dnsLookUp(domain){
    return new Promise((resolve, reject) => {
        dns.lookup(domain, (err, address, family) => {
			if(err) reject(err);
            resolve({ address, family });
        });
   });
};
