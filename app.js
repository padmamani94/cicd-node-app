const express = require('express');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send(`
        <h1>PADMAVATHI Pipeline Deployment Successful</h1>
        <h2>Node.js App Running Inside Docker</h2>
        <p>Deployed using Jenkins + Docker + AWS EC2</p>
    `);
});

app.listen(PORT, () => {
    console.log(`Application running on port ${PORT}`);
});
