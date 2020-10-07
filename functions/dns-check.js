const dns = require('dns');

exports.handler = async event => {

  	const { address, family } = await dnsLookUp();

	return {
		statusCode: 200,
		body: `INFO: Address - ${address} | Family - ${family}`,
	}
}

async function dnsLookUp(){
    return new Promise((resolve, reject) => {
        dns.lookup("www.google.com", (err, address, family) => {
			if(err) reject(err);
            resolve({ address, family });
        });
   });
};
