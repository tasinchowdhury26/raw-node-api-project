// dependencies
const http = require('http');
const { handleReqRes } = require('./helpers/handleReqRes');

// module scaffolding
const app = {};

// app configuration
app.config = {
    port: 3000,
};

app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () => {
        console.log(`Server running on port ${app.config.port}`);
    });
};

app.handleReqRes = handleReqRes;

app.createServer();
