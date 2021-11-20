// Se inicializa con:
const http = require('http');

// Se "declaran" hostname & port
const hostname = '127.0.0.1';
const port = 3000;

// Base Server Part + Reto01 (MSG in "/")
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Message from "/"');
        console.log(`The Request comes from ${req.url}, and the method is ${req.method}`);
    }

    else if (req.url === '/name') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('A Name on "/name"');
        console.log(`The Request comes from ${req.url}, and the method is ${req.method}`);
    }
})

// Server Listen (Para su apertura a requests)
server.listen(port, hostname, () => {
    console.log(`Server running on http://${hostname}:${port}/`);
})