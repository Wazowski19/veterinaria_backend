import http from 'http';
import api from './api/api.js'

const server = http.createServer(api)
const port = 3000

server.on('listening', onlistening)
server.on('error', onError)

server.listen(port)

function onError(){
    switch(error.code){
        case 'EACCES':
            console.error('El sistema no tiene permisos suicientes');
            process.exit(1);
            break;

        case 'EADDRINUSE':
            console.error('El perto con esa dirección ya están siendo usados');
            process.exit(1);
            break; 
        
        default: 
            throw error;

    }
}

function onlistening(){
    const addr = server.address();
    const bind = typeof addr === 'string' ? `pipe ${addr}` :  `port ${addr.port}`;
    console.log(`Servidor escuchando en ${bind}`);
}