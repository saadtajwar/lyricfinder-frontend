const express = require('express');
const app = express();

const PORT = 8008;

app.get('/', (request, response) => {
    response.send('Ping');
})

app.listen(PORT, () => {
    console.log(`connected to ${PORT}`)
})