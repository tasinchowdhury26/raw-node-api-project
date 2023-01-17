const { StringDecoder } = require('string_decoder');
const url = require('url');
const routes = require('../routes');
const notFoundHandler = require('../handlers/routeHandlers/notFoundHandler');

const handler = {};

handler.handleReqRes = (req, res) => {
    // request handling
    // get the url and parse it
    const parsedURL = url.parse(req.url, true);
    const path = parsedURL.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    const method = req.method.toLowerCase();
    const queryStringObject = parsedURL.query;
    const headersObject = req.headers;
    const decoder = new StringDecoder('utf-8');
    let realData = '';

    const requestProperties = {
        parsedURL,
        path,
        trimmedPath,
        method,
        queryStringObject,
        headersObject,
    };

    const chosenHandler = routes[trimmedPath] ? routes[trimmedPath] : notFoundHandler;

    req.on('data', (buffer) => {
        realData += decoder.write(buffer);
    });

    req.on('end', () => {
        realData += decoder.end();

        chosenHandler(requestProperties, (statusCode, payload) => {
            statusCode = typeof statusCode === 'number' ? statusCode : 500;
            payload = typeof payload === 'object' ? payload : {};

            const payloadString = JSON.stringify(payload);
            res.writeHead(statusCode);
            res.end(payloadString);
        });

        res.end('Hi Hustlers!');
    });

    // console.log(queryStringObject);
    // console.log(method);
    // console.log(headers);
};
module.exports = handler;
