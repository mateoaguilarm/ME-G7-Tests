// RETOS

// 1. Muestra un mensaje en la ruta exacta " / "
//     a. Ej: Este es un mensaje desde la ruta " / "
// 2. Muestra tu nombre en la ruta " /your-name "
//     a. Ej: GET /nombre ⇒ Mi nombre es Nombre
// 3. Muestra un objeto con users en la ruta " /users "
//     a. Ej: GET /users ⇒ { user1: 'Petra', user2: 'Alexa', user3: 'Jack'}
// 4. Muestra un error 404 en una ruta indefinida
//     a. Ej: GET /dashboard ⇒ 404 Ruta No Encontrada :(

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

    // Reto02 - Iniciacion tipica, añadiendose la ruta, tipo de contenido y mensaje
    else if (req.url === '/name') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('A Name on "/name"');
        console.log(`The Request comes from ${req.url}, and the method is ${req.method}`);
    }

    // Reto03 - Inicia con contenido JSON por la respuesta que arrojará y añadiendo un arreglo de ejemplo.
    else if (req.url === '/users') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        
        const users = [
            { name: 'Hank', email: 'hank@test.com' },
            { name: 'Walt', email: 'walter@test.com' },
            { name: 'Ben', email: 'ben.oso@test.com' }
        ];
        res.end(JSON.stringify(users));
        console.log(`The Request comes from ${req.url}, and the method is ${req.method}`);
    }

    // Reto04 - Inicia, recalca su statusCode, y con el "else" arrojando una respuesta para cualquier ruta no registrada.
    else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('URL not found - 404 Error');
        console.log(`The Request comes from ${req.url}, and the method is ${req.method}`);
    }
})

// Server Listen (Para su apertura a requests)
server.listen(port, hostname, () => {
    console.log(`Server running on http://${hostname}:${port}/`);
})