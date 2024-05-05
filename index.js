
const  listOfMethods = require('./lib/methods')

async function fetch_Json(url = String, { method = 'GET', headers = {}, body = null }) {
    
    try {
        if (!listOfMethods.includes(method.toUpperCase())) {
            throw new Error('Unsupported Method')
        };

    const response = await fetch(url, {
        method,
        headers,
        body: body ? JSON.stringify(body) : null,    
    });

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }


    return response.json()
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
};

module.exports = { fetch_Json }