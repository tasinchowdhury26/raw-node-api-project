const crypto = require('crypto');
const environments = require('./environments');

const utilities = {};

utilities.parseJSON = (JSONstring) => {
    let output;

    try {
        output = JSON.parse(JSONstring);
    } catch {
        output = {};
    }
    return output;
};

// hash any given string
utilities.hash = (str) => {
    if (typeof str === 'string' && str.length > 0) {
        const hash = crypto.createHmac('sha256', environments.secretKey).update(str).digest('hex');
        return hash;
    }
    return false;
};

// export the appropriate environment
module.exports = utilities;
