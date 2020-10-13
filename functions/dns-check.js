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
	const recordsA = await getDNSRecord(domain, type = 'A');
	const recordsAAAA = await getDNSRecord(domain, type = 'AAAA');
	const recordsMX = await getDNSRecord(domain, type = 'MX');
	const recordsCNAME = await getDNSRecord(domain, type = 'CNAME');
	const recordsNS = await getDNSRecord(domain, type = 'NS');
	const recordsPTR = await getDNSRecord(domain, type = 'PTR');
	const recordsSOA = await getDNSRecord(domain, type = 'SOA');
	const recordsTXT = await getDNSRecord(domain, type = 'TXT');

	return {
		statusCode: 200,
		headers,
		body: JSON.stringify({
			address,
			family,
			recordsA,
			recordsAAAA,
			recordsMX,
			recordsCNAME,
			recordsNS,
			recordsPTR,
			recordsSOA,
			recordsTXT
		})
	}
}

async function dnsLookUp(domain){
    return new Promise((resolve, reject) => {
        dns.lookup(domain, (err, address, family) => {
            resolve({ address, family });
        });
   });
};

async function getDNSRecord(domain, type) {
	return new Promise((resolve, reject) => {
		dns.resolve(domain, type, (err, records) => {
			resolve(records);
		});
	});
}
