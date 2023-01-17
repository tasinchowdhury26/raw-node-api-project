// dependencies
const http = require('http');
const { handleReqRes } = require('./helpers/handleReqRes');
const environment = require('./helpers/environments');

const data = require('./lib/data');

// testing file system
data.delete('test', 'newFile', (err) => {
    console.log(err);
});
// module scaffolding
const app = {};

app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(environment.port, () => {
        console.log(`Server running on port ${environment.port}`);
    });
};

app.handleReqRes = handleReqRes;

app.createServer();
