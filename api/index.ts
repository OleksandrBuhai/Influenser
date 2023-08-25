
/*start by command npx ts-node index.ts*/


import express from 'express';
import * as http from 'http';


const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const PORT = 3000;
const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);

    // Open browser after server starts
    if (process.platform === 'darwin') {
        // macOS
        const { exec } = require('child_process');
        exec('open http://localhost:3000');
    } else if (process.platform === 'win32') {
        // Windows
        const { exec } = require('child_process');
        exec('start http://localhost:3000');
    }
});
