// dependencies
const http = require('http');
const url = require('path');

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

app.handleReqRes = (req, res) => {
    res.write('Hi!\n');
    res.end('\t\tHello Jahin!');
};

app.createServer();
